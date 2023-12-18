import { useEffect, useState } from "react";


function Cart({ cart, setCart, changeCartQty }) {
	const [price, setPrice] = useState(0);
	const [isCheckout, setCheckout] = useState(false);

	const checkOutHandler = () => {
		setCheckout(true);
	};

	const paymentHandler = () => {
		setCart([]);
		setCheckout(false);
	};

	const totalCartAmt = () => {
		let total = 0;
		cart.map((item) => {
		return	total += item.quantity * item.Price;
		});
		setPrice(total);
	};

	const removeItem = (id) => {
		const arr = cart.filter((item) => item.id !== id);
		setCart(arr);
		//    totalCartAmt()
	};

	useEffect(() => {
		totalCartAmt();
	});

	return (
		<article>
			<div>{cart.length === 0 && <h2>Cart is Empty</h2>}</div>
			{cart?.map((item) => {
				return (
					<div className="card-box" key={item.id}>
						<div className="card-img">
							<img src={item.image} alt="" />
							<h3>{item.Album}</h3>
						</div>

						<div>
							<button onClick={() => changeCartQty(item, +1)}>+</button>
							<button>{item.quantity}</button>
							<button onClick={() => changeCartQty(item, -1)}>-</button>
						</div>
						<div>
							<span>${item.Price}</span>
							<button onClick={() => removeItem(item.id)}>Remove</button>
						</div>
					</div>
				);
			})}
			<div className="total">
				<span>Total price of your cart =</span>
				<span> ${price}</span>
			</div>
			{isCheckout ? (
				<div>
				  <h3>Checkout</h3>
					{ <button onClick={paymentHandler}>Pay Now</button> }
				</div>
			) : (
				<div>
					
				<button onClick={checkOutHandler}>Checkout</button></div>

			)}
		</article>
	);
}

export default Cart;




