
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Box, Tooltip, Typography } from "@mui/material";

// GeoJSON URL for the world map
const WORLD_GEO_JSON = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const IndiaMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, color: "#7d66d9", textAlign: "center" }}
      >
         
      </Typography>

      <ComposableMap
        projectionConfig={{
          scale: 200,
        }}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Geographies geography={WORLD_GEO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <g key={geo.rsmKey}>
                <Tooltip
                  title={
                    <Typography variant="subtitle2">
                      {geo.properties.name || "Unknown Country"}
                    </Typography>
                  }
                  arrow
                >
                  <Geography
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(geo.properties.name || "Unknown Country");
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => {
                      alert(`You clicked on ${geo.properties.name || "Unknown Country"}`);
                    }}
                    style={{
                      default: {
                        fill: "#e6e7ff",
                        outline: "none",
                      },
                      hover: {
                        fill: "#7d66d9",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#a38ae8",
                        outline: "none",
                      },
                    }}
                  />
                </Tooltip>
                {geo.geometry.coordinates && (
                  <text
                    x={geo.centroid && geo.centroid[0]}
                    y={geo.centroid && geo.centroid[1]}
                    style={{
                      fontFamily: "system-ui",
                      fill: "#5B5BD6",
                      fontSize: "10px",
                      textAnchor: "middle",
                      pointerEvents: "none",
                    }}
                  >
                    {geo.properties.name}
                  </text>
                )}
              </g>
            ))
          }
        </Geographies>
      </ComposableMap>

      {tooltipContent && (
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            p: 1,
            background: "#e2ddfe",
            borderRadius: "8px",
            color: "#26292B",
          }}
        >
          Selected: {tooltipContent}
        </Typography>
      )}
    </Box>
  );
};

export default IndiaMap;
