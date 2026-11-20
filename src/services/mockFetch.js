import seed from "virtual:demo-database";

const storageKey = "orbitasks-demo-database-v1";

function json(data, status = 200) {
  return Response.json(data, { status });
}

function filterRecords(records, params) {
  const keys = [...new Set(params.keys())].filter((key) =>
    key === "_id_in" || records.some((record) => Object.hasOwn(record, key))
  );

  return records.filter((record) =>
    keys.every((key) => {
      if (key === "_id_in") {
        return params.getAll(key).flatMap((ids) => ids.split(",")).includes(String(record.id));
      }
      return record[key] != null && params.getAll(key).includes(String(record[key]));
    })
  );
}

export async function mockFetch(url, { method = "GET", body } = {}) {
  const { pathname, searchParams } = new URL(url, window.location.origin);
  const route = /^\/api\/([^/]+)(?:\/([^/]+))?\/?$/.exec(pathname);
  if (!route || !Object.hasOwn(seed, route[1])) return json({}, 404);

  const [, collection, encodedId] = route;
  const id = encodedId === undefined ? undefined : decodeURIComponent(encodedId);
  const stored = localStorage.getItem(storageKey);
  const database = stored ? JSON.parse(stored) : { ...seed, [collection]: [...seed[collection]] };
  const records = database[collection];
  const index = records.findIndex((record) => String(record.id) === id);
  const record = records[index];

  if (method === "GET") {
    if (id === undefined) return json(filterRecords(records, searchParams));
    return record ? json(record) : json({}, 404);
  }

  if (method !== "POST" && !record) return json({}, 404);
  const payload = body === undefined ? {} : JSON.parse(body);
  let result;

  switch (method) {
    case "POST":
      if (id !== undefined) return json({}, 405);
      result = { ...payload, id: payload.id || crypto.randomUUID() };
      if (records.some((item) => String(item.id) === String(result.id))) {
        return json({ message: "This record ID already exists." }, 409);
      }
      records.push(result);
      break;
    case "PATCH":
      result = { ...record, ...payload, id: record.id };
      records[index] = result;
      break;
    case "PUT":
      result = { ...payload, id: record.id };
      records[index] = result;
      break;
    case "DELETE":
      records.splice(index, 1);
      result = {};
      break;
    default:
      return json({}, 405);
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(database));
  } catch {
    return json({ message: "Unable to save the demo data in this browser." }, 507);
  }

  return json(result, method === "POST" ? 201 : 200);
}
