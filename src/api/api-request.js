// utils/api-request.js

export async function apiRequest(endpoint, options = {}) {
  const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;

  const headers = {
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${baseUrl}/api/${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
}
