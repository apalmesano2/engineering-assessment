import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import { RMap, ROSM } from "rlayers";
import { createTruckLayer } from "../layers/food-trucks";

const center = fromLonLat([-122.4194, 37.7749]); // lon/lat used is San Fransisco city center

export const Map = (): JSX.Element => {
    return (
        <RMap width={"100%"} height={"100vh"} initial={{ center: center, zoom: 12 }}>
          <ROSM />
          {createTruckLayer()}
        </RMap>
      );
}

export default Map;
