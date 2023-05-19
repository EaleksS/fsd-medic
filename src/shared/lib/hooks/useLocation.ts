import { useEffect, useState } from "react";
import { ILocation } from "../../types/location.interface";

export const useLocation = () => {
  const [lng, setLng] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const [location, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition): void => {
        const lat: number = pos.coords.latitude;
        const lng: number = pos.coords.longitude;

        setLat(lat);
        setLng(lng);
        setLocation({ lat, lng });
      }
    );
  }, []);

  return { lat, lng, location };
};
