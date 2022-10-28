import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch("https://6358eb4eff3d7bddb993ed07.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddCart = (obj) => {
		
		setCartItems((prev) => [...prev, obj]);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer items={cartItems} onClose={() => setCartOpened(false)} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кросcовки</h1>
					<div className='search-block d-flex align-center'>
						<img alt='favorite' width={18} height={18} src='/img/search.svg' />
						<input placeholder='Поиск ...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{items.map((val) => (
						<Card
							title={val.title}
							price={val.price}
							imgUrl={val.imgUrl}
							onFavorite={() => console.log(val)}
							onAddCart={(obj) => {
								onAddCart(obj);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
