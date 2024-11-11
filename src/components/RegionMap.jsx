import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import usStates from "../data/us-states.json";

function RegionMap() {
  return (
    <div className="h-72 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">Region labels</h2>
      <ComposableMap
        projection="geoAlbersUsa"
        width={500}
        height={300}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={usStates}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#e2e8f0", outline: "none" },
                  hover: { fill: "#cbd5e1", outline: "none" },
                  pressed: { fill: "#94a3b8", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default RegionMap;
