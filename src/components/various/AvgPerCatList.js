import React from "react";
import { useSelector } from "react-redux";
import WinRateMeter from "./WinRateMeter";

const AvgPerCatList = (props) => {
  const userStatsReducer = useSelector((state) => state.userStatsReducer);

  return (
    <div style={{ marginTop: 25 }}>
      {userStatsReducer.data.map((entry, i) => {
        return (
          <WinRateMeter
            key={i}
            data={entry}
            index={i}
            selectedCategory={props.selectedCategory}
          />
        );
      })}
    </div>
  );
};

export default AvgPerCatList;
