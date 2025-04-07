const API_URL = import.meta.env.VITE_API_URL;

export const placeholderFetch = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${(error as Error).message}`);
  }
};
