import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Statistics from "./Statistics";

const StatisticFriend = () => {
  const { id } = useParams();
  const authReducer = useSelector((state) => state.authReducer);

  return authReducer.authenticated && <Statistics id={id} />;
};

export default StatisticFriend;
