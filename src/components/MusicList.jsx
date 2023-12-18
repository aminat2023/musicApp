import Musics from "./Musics";
function MusicList({ musicProduct, clickHandler }) {


	return (
		<section  className="container">
			{musicProduct.map((item) => {
				return (
					<div key={item.id}>	
						<Musics key={item.id} item={item} clickHandler={clickHandler}  />
						
					</div>
				);
			})}
		</section>
	);
}

export default MusicList;
