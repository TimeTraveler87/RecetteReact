import React, {useState, useContext} from "react";

export const ReceiptContext = React.createContext();

const ReceiptProvider = ({ children }) => {
	const [Receipts, setReceipts] = useState([]);

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
