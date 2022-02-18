import React from "react";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";

const center = fromLonLat([-122.4194, 37.7749]);

export const Map = () => {
    return (
        <RMap width={"100%"} height={"100vh"} initial={{ center: center, zoom: 12 }}>
          <ROSM />
        </RMap>
      );
}

export default Map;
