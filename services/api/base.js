// ham call api chung
const BASE_URL = 'backend';

// endpoint la router, options bao gom method, header, body
export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      // neu response ko phai 2xx thi throw error
      throw new Error(`HTTP error! Status: ${response.status}` + response.statusText);
    }
    // tach json tu response
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
