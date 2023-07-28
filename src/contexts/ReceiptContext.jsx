import React, {useState, useContext,useEffect} from "react";
import data from '../components/Receipt/recette.json'

export const ReceiptContext = React.createContext();

const ReceiptProvider = ({ children }) => {
	const [receipts, setreceipts] = useState([...data.content]);
	// data.content.forEach((el)=>{
	// 	console.log(el)
	// 	addreceipts(el)
	// })
	
	const addreceipts = (Receipt) => {
		console.log("receipts",receipts)
		console.log("receipts",receipts)

		setreceipts([...receipts,Receipt])
	
	}
	console.log("in Context",receipts)
	
	return (
		<ReceiptContext.Provider
			value={{
				receipts,
				setreceipts,
			}}
		>
			{children}
		</ReceiptContext.Provider>
	);
};

export default ReceiptProvider;

export const useReceiptList = () => {
	return useContext(ReceiptContext);
};

// data.content.map((el,index)=>(
// 	// !receipts.find(el=>el.id==0 || el.id==1) &&
// 		setreceipts([...receipts,el]),
// useEffect(()=> {
// 	data.content.map((el,index)=>(
// 		// !receipts.find(el=>el.id==0 || el.id==1) &&
// 			setreceipts([...receipts,el])
// 	))	
// 	// const parsedData = JSON.parse(localStorage.getItem('myData'));
// 	// if(parsedData)
// 	// {
// 	// 	parsedData.forEach(el => {
// 	// 		if(el.id!=0 && el.id!=1)
// 	// 		{
// 	// 			tmpreceipts.push(el)
// 	// 		}
// 	// 	});
// 	// }
	
// 	// console.log("parsed Datas" + parsedData)
// 	// console.log("tmpReceipt : " + tmpreceipts)		
// 	 console.log("receipts : " + receipts)

//   },[])


// const updateTask = (index, task) => {
//     const newState = [...tasks]
//     newState[index] = task
//     setTasks(newState)
// }