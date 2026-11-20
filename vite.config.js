import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFile } from "node:fs/promises";
import { cwd } from "node:process";

const demoSeedId = "virtual:demo-database";
const databaseFile = new URL("./database.json", import.meta.url);

function demoDatabase() {
  return {
    name: "orbi-tasks-demo-database",
    resolveId(id) {
      if (id === demoSeedId) return "\0" + id;
    },
    async load(id) {
      if (id !== "\0" + demoSeedId) return;

      const database = JSON.parse(await readFile(databaseFile, "utf8"));
      database.users = database.users.map(({ id, role, created_at }, index) => ({
        id,
        role,
        status: "Active",
        first_name: "Demo",
        last_name: `User ${index + 1}`,
        email: `demo${index + 1}@example.com`,
        password: "DemoOnly123!",
        date_of_birth: "",
        phone_number: "",
        address: "",
        position: "",
        created_at,
      }));

      return `export default ${JSON.stringify(database)};`;
    },
  };
}
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";
  const env = isDemo ? {} : loadEnv(mode, cwd(), "");

  return {
    envDir: isDemo ? false : undefined,
    plugins: [react(), tailwindcss(), demoDatabase()],
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
    },
  };
});

// vite.config.js
// export default defineConfig({
//   assetsInclude: ['**/*.png']
// });
