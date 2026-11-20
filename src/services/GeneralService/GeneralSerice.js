import { apiFetch } from "../apiFetch.js";
import { API } from "../../constants/api.constants";
async function requestUser(userId, method, data) {
  const response = await apiFetch(`${API.USER_URI}/${userId}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  if (!response.ok) {
    throw new Error(user.message || `User request failed (${response.status})`);
  }
  return user;
}
export const apiGetUserProfile = async (userId) => {
  try {
    const res = await apiFetch(`${API.USER_URI}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to render user profile");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
export const apiChangeAvatar = async (userId, avatarUrl) => {
  try {
    const res = await apiFetch(`${API.USER_URI}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar_url: avatarUrl, // Base64 string for the static image
      }),
    });
    if (!res.ok) {
      throw new Error(`Failed to update avatar: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to update avatar");
  }
};
export const updateUserProfile = async (userId, data) => {
  return requestUser(userId, "PUT", data);
};

export const apiChangePassword = async (
  userId,
  { currentPassword, newPassword }
) => {
  try {
    const user = await requestUser(userId, "GET");

    if (user.password !== currentPassword) {
      throw new Error("Current password is incorrect");
    }
    if (currentPassword === newPassword) {
      throw new Error(
        "New password must be different from the current password"
      );
    }

    return await requestUser(userId, "PATCH", {
      password: newPassword,
    });
  } catch (error) {
    throw new Error(
      error.message || "Failed to change password"
    );
  }
};
