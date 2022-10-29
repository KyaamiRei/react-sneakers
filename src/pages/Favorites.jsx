import Card from "../components/Card";

function Favorites({ items, onAddFavorites }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Избранное</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{items.map((item) => (
					<Card
						key={item.id}
						favorited={true}
						onAddFavorite={onAddFavorites}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;
