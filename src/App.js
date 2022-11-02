import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

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
			try {
				const [cartItemResponce, favoriteItemResponce, itemResponce] =
					await Promise.all([
						axios.get(apiUrl.API_URL + "/cart"),
						axios.get(apiUrl.API_URL + "/favorites"),
						axios.get(apiUrl.API_URL + "/items"),
					]);

				setCartItems(cartItemResponce.data);
				setFavorites(favoriteItemResponce.data);
				setItems(itemResponce.data);
				setIsLoading(false);
			} catch (error) {
				alert("Ошибка при запросе данных!");
			}
		}

		fetchData();
	}, []);

	const onAddCart = async (obj) => {
		try {
			const findItem = cartItems.find(
				(item) => Number(item.parentId) === Number(obj.id)
			);
			if (findItem) {
				axios.delete(apiUrl.API_URL + `/cart/${findItem.id}`);
				setCartItems((prev) =>
					prev.filter((item) => Number(item.parentId) !== Number(obj.id))
				);
			} else {
				const { data } = await axios.post(apiUrl.API_URL + "/cart", obj);
				setCartItems((prev) => [...prev, data]);
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
		try {
			axios.delete(apiUrl.API_URL + `/cart/${id}`);
			setCartItems((prev) =>
				prev.filter((item) => Number(item.id) !== Number(id))
			);
		} catch (error) {
			alert("Ошибка при оформлении заказа");
		}
	};

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id));
	};

	return (
		<AppContext.Provider
			value={{
				cartItems,
				favorites,
				items,
				isItemAdded,
				onAddFavorites,
				onAddCart,
				setCartOpened,
				setCartItems,
			}}
		>
			<div className='wrapper clear'>
				<Drawer items={cartItems} onRemove={onRemoveItem} opened={cartOpened} />

				<Header onClickCart={() => setCartOpened(true)} />

				<Routes>
					<Route
						path='/react-sneakers'
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

					<Route path='/react-sneakers/favorites' element={<Favorites />} />

					<Route path='/react-sneakers/orders' element={<Orders />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
