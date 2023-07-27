import React from 'react'
import ReceiptProvider, { useReceiptList } from '../contexts/ReceiptContext'
import Detail from '../components/Detail/Detail'
import {
  useParams,
} from "react-router-dom";
const RedirectDetail = () => {
  const {id} = useParams();
  return (
    <ReceiptProvider>
        <Detail
        id={id}
        />
    </ReceiptProvider>
  )
}

export default RedirectDetail