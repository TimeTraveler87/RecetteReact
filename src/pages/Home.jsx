import React from "react";
import ReceiptList from "../components/ReceiptList/ReceiptList";
import ReceiptProvider, { useReceiptList } from '../contexts/ReceiptContext'
import '../css/home.css'

const Home = () => {
	// const posts = getPosts();
	// const {addReceipts,Receipts} = useReceiptList()

	
	return (
		<div>
			<ReceiptProvider>
				<ReceiptList/>
				{/* {console.log(Receipts)}
				{data.map(( recette, id ) => (
					<li key={id}>
					<Link to={`/${id}`}>{recette.name}</Link>
					</li>
          ))} */}
			</ReceiptProvider>
		</div>
	);
};

export default Home;
