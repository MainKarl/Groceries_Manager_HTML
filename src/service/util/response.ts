export const safeResponseJson = async (response: Response) => {
  try {
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    return {};
  }
};

export const safeResponseText = async (response: Response) => {
  try {
    const responseData = await response.text();
    return responseData;
  } catch (e) {
    return "";
  }
};
