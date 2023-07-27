import React from 'react'
import ReceiptProvider, { useReceiptList } from '../contexts/ReceiptContext'
import Detail from '../components/Detail/Detail'
const RedirectDetail = () => {
  return (
    <ReceiptProvider>
        <Detail/>
    </ReceiptProvider>
  )
}

export default RedirectDetail