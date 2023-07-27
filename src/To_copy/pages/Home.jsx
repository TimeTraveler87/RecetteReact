import React from "react";
import Receipt from "../components/Receipt/Receipt";
import ReceiptList from "../components/ReceiptList/ReceiptList";
import ReceiptProvider, { useReceiptList } from '../contexts/ReceiptContext'
// import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import data from "../components/Receipt/recette.json"

// import { getPosts } from "./api";

const Home = () => {
	// const posts = getPosts();
	// const {addReceipts,Receipts} = useReceiptList()

	
	return (
		<div>
			<ReceiptProvider>
				<ReceiptList/>
				{/* {console.log(Receipts)} */}
				{data.map(( recette, id ) => (
					<li key={id}>
					<Link to={`/${id}`}>{recette.name}</Link>
					</li>
          ))}
			</ReceiptProvider>
		</div>
	);
};

export default Home;
