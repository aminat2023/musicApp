import musicProduct from "../data/MusicData";
import { Link, useParams } from "react-router-dom";

function ProductView({ clickHandler, setShow, cart }) {
	const { ProductId } = useParams();
	const product = musicProduct.find(
		(product) => product.id === parseInt(ProductId)
	);
	const {
		image,
		Artist_Name,
		stage_Name,
		Album,
		categories,
		description,
		Price,
	} = product;
	return (
		<section className="section-container">
			<div className="product-view">
				<div className="img-container">
					<img src={image} alt="" />
				</div>
				<div className="main-conatainer">
					<h1>{Artist_Name}</h1>
					<h1>{stage_Name}</h1>
					<h1>{Album}</h1>
					<h1>{categories}</h1>
					<p>{description}</p>
					<h3>${Price}</h3>
					<button onClick={() => clickHandler(product)}>Buy Now$</button>
					<Link to="/">Back to homepage</Link>
				</div>
			</div>
		</section>
	);
}

export default ProductView;
