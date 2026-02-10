export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        reject(new Error(`Geolocation error: ${error.message}`));
      }
    );
  });
};

export const watchLocation = (callback, options = {}) => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported');
  }

  return navigator.geolocation.watchPosition(
    (position) => {
      callback({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
    },
    (error) => {
      console.error('Geolocation watch error:', error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
      ...options,
    }
  );
};
