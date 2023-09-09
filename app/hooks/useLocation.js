import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getLastKnownPositionAsync();
      const { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    location,
  };
};

export default useLocation;
