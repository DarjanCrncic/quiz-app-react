import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import { pieColors } from "../../utils/pie-colors";

const PlayerStatsPieChart = (props) => {
  const userStatsReducer = useSelector((state) => state.userStatsReducer);

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = userStatsReducer.data.map((entry, i) => {
    if (hovered === i) {
      return {
        title: entry.label,
        value: entry.play_rate,
        color: "grey",
      };
    }
    return {
      title: entry.label,
      value: entry.play_rate,
      color: pieColors[i % pieColors.length],
    };
  });

  const lineWidth = 60;

  return (
    <div>
      <PieChart
        style={{
          fontFamily:
            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: "8px",
          width: "70%",
        }}
        data={data}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={lineWidth}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fontSize: "0.4rem",
          fill: "#fff",
          opacity: 0.75,
          pointerEvents: "none",
        }}
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
          props.setClickedCategory(index === selected ? undefined : index);
        }}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(undefined);
        }}
      />
      <Typography variant="h5" style={{ marginTop: 10 }}>
        {selected !== undefined &&
          data.length > 0 &&
          data[selected].title + " "}
        {selected !== undefined && data.length > 0 && (
          <div
            style={{
              width: "1rem",
              height: "1rem",
              border: "1px solid",
              backgroundColor: pieColors[selected],
              display: "inline-block",
            }}
          ></div>
        )}
      </Typography>
    </div>
  );
};

export default PlayerStatsPieChart;
