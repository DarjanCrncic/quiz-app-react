import React from "react";
import { useSelector } from "react-redux";
import Statistics from "./Statistics";

const StatisticMain = () => {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    authReducer.authenticated && (
      <Statistics id={authReducer.principal.principal.id} />
    )
  );
};

export default StatisticMain;
