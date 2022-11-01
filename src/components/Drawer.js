import { useContext, useState } from "react";

import { AppContext } from "../App";

import axios from "axios";

import Info from "./info";

import apiUrl from "../config.json";

function Drawer({ items = [], onRemove }) {
	const { cartItems, setCartOpened, setCartItems } = useContext(AppContext);
	const [idOrder, setIdOrder] = useState(0);
	const [isOrder, setIsOrder] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(apiUrl.API_URL + "/orders", {
				items: cartItems,
			});
			await axios.put(apiUrl.API_URL + "/cart", []);
			setIdOrder(data.id);
			setIsOrder(true);
			setCartItems([]);
		} catch (error) {
			alert("Не удалось сделать заказ");
		}
		setIsLoading(false);
	};

	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='mb-20 d-flex justify-between'>
					Корзина
					<img
						onClick={() => setCartOpened(false)}
						className='removeBtn cu-p'
						src='/img/close_btn.svg'
						alt='Close'
					/>
				</h2>

				{items.length > 0 ? (
					<div className='d-flex flex-column flex'>
						<div className='items'>
							{items.map((obj) => (
								<div
									key={obj.id}
									className='cartItem d-flex align-center mb-20'
								>
									<div
										style={{ backgroundImage: `url(${obj.imgUrl})` }}
										className='cartItemImg'
									></div>
									<div className='mr-20'>
										<p className='mb-5'>{obj.title}</p>
										<b>{obj.price} руб.</b>
									</div>
									<img
										onClick={() => {
											onRemove(obj.id);
										}}
										className='removeBtn'
										src='/img/close_btn.svg'
										alt='Remove'
									/>
								</div>
							))}
						</div>
						<div>
							<div className='cartTotalBlock'>
								<ul>
									<li>
										<span>Итого:</span>
										<div></div>
										<b>21 234 руб.</b>
									</li>
									<li>
										<span>Налог 5%:</span>
										<div></div>
										<b> 1 232 руб.</b>
									</li>
								</ul>
								<button onClick={onClickOrder} className='greenButton'>
									Оформить заказ <img src='/img/row.svg' alt='Next' />
								</button>
							</div>
						</div>
					</div>
				) : (
					<Info
						title={isOrder ? "Заказ оформлен!" : "Корзина пустая"}
						description={
							isOrder
								? `Ваш заказ #${idOrder} скоро будет передан курьерской доставке`
								: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
						}
						image={isOrder ? "/img/acces_order.jpg" : "/img/empty-cart.png"}
					/>
				)}
			</div>
		</div>
	);
}

export default Drawer;
