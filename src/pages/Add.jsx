import React, { useState } from 'react'
import ReceiptProvider, { useReceiptList } from '../contexts/ReceiptContext'
import AddForm from '../components/AddForm/AddForm';
import Detail from '../components/Detail/Detail';
import ReceiptList from '../components/ReceiptList/ReceiptList';

const Add = () => {

	return (   
      <AddForm/>
	);
}

export default Add