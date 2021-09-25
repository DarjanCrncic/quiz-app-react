import React from 'react'
import { useParams } from 'react-router-dom';
import Statistics from './Statistics';

const StatisticFriend = () => {
  const {id} = useParams();

  return (
    <Statistics id = {id}/>
  )
}

export default StatisticFriend
