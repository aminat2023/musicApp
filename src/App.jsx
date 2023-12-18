import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState } from "react";
import MusicList from "./components/MusicList";
import Nav from "./components/Navbar/Nav";
import musicProduct from "./data/MusicData";
import Descovery from "./components/Descovery";
import Cart from "./components/Cart";
import ProductView from "./components/ProductView";
import Products from "./components/Products";



function App() {
	const [music, setMusic] = useState(musicProduct);
	const [cart, setCart] = useState([]);
	const [show, setShow] = useState(true);
	const [warning, setWarning] = useState(false);

	const clickHandler = (item) => {
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id) isPresent = true;
		});

		if (isPresent) {
			setWarning(true);
			setTimeout(() => {
				setWarning(false);
			}, 2000);
			return;
		}

		setCart([...cart, item]);
	};

	const changeCartQty = (item, count) => {
		let ind = -1;
		cart.forEach((data, index) => {
			if (data.id === item.id) ind = index;
		});

		const tempArr = cart;

		tempArr[ind].quantity += count;

		if (tempArr[ind].quantity === 0) tempArr[ind].quantity = 1;

		setCart([...tempArr]);
	};

	return (
		
			
			<BrowserRouter>
				<Nav size={cart.length} setShow={setShow} />
				<Routes>
						<Route path="/" element={
						            <>
									{show ? (<MusicList musicProduct={music} clickHandler={clickHandler}  />
									) : (
										<Cart
											cart={cart}
											setCart={setCart}
											changeCartQty={changeCartQty}
										/>
									)}
								</>
							}
						 />
					<Route path="/descovery" element={<Descovery />} />
					<Route path="/musicProduct" element={<Products  />} />
					<Route path="/musicProduct/:ProductId" element={
						<>
			     {show ? (		<ProductView clickHandler={clickHandler} cart={cart} />):(	<Cart
											cart={cart}
											setCart={setCart}
											changeCartQty={changeCartQty}
										/>)}
					</>
					} 	
					/>
					
					
				</Routes>
			</BrowserRouter>
	
	);
}

export default App;
