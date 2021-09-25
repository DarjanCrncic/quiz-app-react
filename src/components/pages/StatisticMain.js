import React from 'react'
import { useSelector } from 'react-redux';
import Statistics from './Statistics';

const StatisticMain = () => {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <Statistics id = {authReducer.principal.principal.id}/>
  )
}

export default StatisticMain
