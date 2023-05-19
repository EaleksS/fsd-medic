import { FC } from "react";
import styles from "./Map.module.scss";
import { Loader, useLocation } from "../../../shared";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export const Map: FC = (): JSX.Element => {
  const { location } = useLocation();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries: ["places"],
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className={styles.location}>
      {location !== null && isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          options={{
            disableDefaultUI: true,
          }}
          center={location}
        >
          <MarkerF position={location} />
        </GoogleMap>
      ) : (
        <Loader className={styles.loader} />
      )}
    </div>
  );
};
