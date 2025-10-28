export const loadConfig = async () => {
  try {
    console.log("=== Before ES16 JSON Module Example ===\n");
    const response = await fetch('./config.json');
    const contentType = response.headers.get('content-type');

    const config = await response.json();
    console.log(config.theme);
    console.log(config.charts);
    return config;
  } catch (error) {
    console.error('Error loading config:', error);
  }
};
