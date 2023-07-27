import React, {useState, useContext,useEffect} from "react";
import data from '../components/Receipt/recette.json'

export const ReceiptContext = React.createContext();

const ReceiptProvider = ({ children }) => {
	const [Receipts, setReceipts] = useState([]);
	useEffect(()=> {
		
		let tmpReceipts = []
		data.content.forEach(el => {
			console.log("in")
			tmpReceipts.push(el)
		});
		const parsedData = JSON.parse(localStorage.getItem('myData'));
		if(parsedData)
		{
			parsedData.forEach(el => {
				tmpReceipts.push(el)
			});
		}
		setReceipts(tmpReceipts)
		
		console.log("parsed Datas" + parsedData)
		console.log("tmpReceipt : " + tmpReceipts)		
		console.log("Receipts : " + Receipts)

	  },[])

    const addReceipts = (Receipt) => {
        setReceipts([...Receipts, Receipt])
    }

    // const updateTask = (index, task) => {
    //     const newState = [...tasks]
    //     newState[index] = task
    //     setTasks(newState)
    // }

	return (
		<ReceiptContext.Provider
			value={{
				Receipts,
				setReceipts,
                addReceipts
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
