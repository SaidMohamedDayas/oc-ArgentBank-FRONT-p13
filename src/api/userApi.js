const API_URL = "http://localhost:3001/api/v1";

// getUserProfile API
export const getUserProfileApi = async (token) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

// putUserProfile API
export const updateUserProfileApi = async (token, profile) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
