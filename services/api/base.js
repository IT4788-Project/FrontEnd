// ham call api chung
import API_CONFIG from "../../config/apiConfig";

const BASE_URL = API_CONFIG.API_BASE_URL;

// endpoint la router, options bao gom method, header, body
export const fetchData = async (endpoint, options = {}) => {
  try {
    console.log("endpoint: ", `${BASE_URL}/${endpoint}`)
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
