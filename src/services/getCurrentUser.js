import API from "./api";

const getCurrentUser = async () => {
  try {
    const response = await API.get("me/");
    return response.data;
  } catch (err) {
    console.error("Failed to fetch user info", err);
    return null;
  }
};

window.getCurrentUser = getCurrentUser;

export default getCurrentUser;