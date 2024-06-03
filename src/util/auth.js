import { redirect } from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem("accessToken");
}

export function logout() {
  localStorage.removeItem("accessToken");
  return redirect("/");
}
export function checkAuthLoaderForConnection() {
  const token = getAuthToken();
  if (token) {
    return redirect("/");
  } else {
    return null;
  }
}
