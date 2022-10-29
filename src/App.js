import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import Drawer from "./components/Drawer";
import Header from "./components/Header";

import apiUrl from "./config.json";

function App() {
	const [items, setItems] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setfavorites] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios.get(apiUrl.API_URL + "/items").then((res) => {
			setItems(res.data);
		});
		axios.get(apiUrl.API_URL + "/cart").then((res) => {
			setCartItems(res.data);
		});
		axios.get(apiUrl.API_URL + "/favorites").then((res) => {
			setfavorites(res.data);
		});
	}, []);

	const onAddCart = (obj) => {
		axios.post(apiUrl.API_URL + "/cart", obj);

		setCartItems((prev) => [...prev, obj]);
	};

	const onAddFavorites = async (obj) => {
		try {
			if (favorites.find((item) => item.id === obj.id)) {
				axios.delete(apiUrl.API_URL + `/favorites/${obj.id}`);
			} else {
				const { data } = await axios.post(apiUrl.API_URL + "/favorites", obj);
				setfavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в избранное')
		}
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	const onRemoveItem = (id) => {
		axios.delete(apiUrl.API_URL + `/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}

			<Header onClickCart={() => setCartOpened(true)} />

			<Routes>
				<Route
					path='/'
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddFavorites={onAddFavorites}
							onAddCart={onAddCart}
						/>
					}
				/>

				<Route
					path='/favorites'
					element={
						<Favorites items={favorites} onAddFavorites={onAddFavorites} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
