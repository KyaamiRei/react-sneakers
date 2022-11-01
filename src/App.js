import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import Drawer from "./components/Drawer";
import Header from "./components/Header";

import apiUrl from "./config.json";

export const AppContext = createContext({});

function App() {
	const [items, setItems] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const cartItemResponce = await axios.get(apiUrl.API_URL + "/cart");
			const favoriteItemResponce = await axios.get(
				apiUrl.API_URL + "/favorites"
			);
			const itemResponce = await axios.get(apiUrl.API_URL + "/items");

			setCartItems(cartItemResponce.data);
			setFavorites(favoriteItemResponce.data);
			setItems(itemResponce.data);
			setIsLoading(false);
		}

		fetchData();
	}, []);

	const onAddCart = (obj) => {
		try {
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(apiUrl.API_URL + `/cart/${obj.id}`);
				setCartItems((prev) =>
					prev.filter((item) => Number(item.id) !== Number(obj.id))
				);
			} else {
				axios.post(apiUrl.API_URL + "/cart", obj);
				setCartItems((prev) => [...prev, obj]);
			}
		} catch (error) {}
	};

	const onAddFavorites = async (obj) => {
		try {
			if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(apiUrl.API_URL + `/favorites/${obj.id}`);
				setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
			} else {
				const { data } = await axios.post(apiUrl.API_URL + "/favorites", obj);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert("Не удалось добавить в избранное");
		}
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	const onRemoveItem = (id) => {
		axios.delete(apiUrl.API_URL + `/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id));
	};

	return (
		<AppContext.Provider
			value={{
				cartItems,
				favorites,
				items,
				isItemAdded,
				onAddFavorites,
				setCartOpened,
				setCartItems,
			}}
		>
			<div className='wrapper clear'>
				{cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem} />}

				<Header onClickCart={() => setCartOpened(true)} />

				<Routes>
					<Route
						path='/'
						element={
							<Home
								items={items}
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddCart={onAddCart}
								isLoading={isLoading}
							/>
						}
					/>

					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
