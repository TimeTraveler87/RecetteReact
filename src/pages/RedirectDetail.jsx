import React from 'react'
import Detail from '../components/Detail/Detail'
import {
  useParams,
} from "react-router-dom";
const RedirectDetail = () => {
  const {id} = useParams();
  return (
        <Detail
        id={id}
        />
  )
}

export default RedirectDetail