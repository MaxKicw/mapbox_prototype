import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "../types/Pin";

export interface MapProps {
  pins?: Pin[];
}

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PK as string;

export interface MapRef extends MapboxMap {
  showPin: (pin: Pin) => void;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Map = React.forwardRef<MapRef, MapProps>(({ pins }, ref) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [map, setMap] = useState<mapboxgl.Map>();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default

  const showPin = useCallback((pin: Pin) => {
    return "hi";
  }, []);

  useEffect(() => {
    if (ref === null || typeof ref === "function") return;
    setLoading(true);
    const node = ref.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node as any,
      accessToken: process.env.REACT_APP_MAPBOX_PK,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    // save the map object to React.useState
    setMap(mapboxMap);
    setLoading(false);

    return () => {
      mapboxMap.remove();
    };
  }, [ref]);

  useImperativeHandle(ref, () => {
    return {
      showPin,
    };
  });

  return loading ? (
    <div
      style={{
        overflow: "hidden",
        width: "50%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  ) : (
    <div ref={ref} style={{ width: "50%", height: "50%" }} />
  );
});
