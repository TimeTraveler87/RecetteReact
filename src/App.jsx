import Home from "./pages/Home"
import Add from "./pages/Add"
import Navbar from "./components/Layout/Navbar";
import * as React from "react";
import Detail from "./components/Detail/Detail";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import RedirectDetail from "./pages/RedirectDetail";

function App() {
  return (
		<BrowserRouter>
			<Navbar />
			<div style={{ marginTop: "80px", padding:"30px" }}>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/add" element={<Add/>} />
					<Route
          				path="/recette/:id"
						element={<RedirectDetail />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
  )
}

export default App
