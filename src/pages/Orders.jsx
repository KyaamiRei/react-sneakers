import { useEffect, useState } from "react";


import axios from "axios";

import Card from "../components/Card";

import apiUrl from "../config.json";

function Orders() {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const { data } = await axios.get(apiUrl.API_URL + "/orders");
				console.log(data);
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				alert("Ошибка при запросе заказов");
			}
		})();
	}, []);

	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Мои заказы</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{(isLoading ? [...Array(10)] : orders).map((item, index) => (
					<Card
						key={index}
						loading={isLoading}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Orders;
