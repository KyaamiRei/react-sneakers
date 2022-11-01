import { useContext } from "react";

import { AppContext } from "../App";

import Card from "../components/Card";

function Favorites() {
	const { favorites } = useContext(AppContext);

	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Избранное</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{favorites.map((item) => (
					<Card
						key={item.id}
						favorited={true}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;
