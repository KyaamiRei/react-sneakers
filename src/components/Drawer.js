import CartItem from "./CartItem";

function Drawer() {
	return (
		<div style={{ display: "none" }} className='overlay'>
			<div className='drawer'>
				<h2 className='mb-20 d-flex justify-between'>
					Корзина
					<img
						className='removeBtn cu-p'
						src='/img/close_btn.svg'
						alt='Remove'
					/>
				</h2>

				<div className='items'>
					<CartItem />					
				</div>

				<div className=''>
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
						<button className='greenButton'>
							Оформить заказ <img src='/img/row.svg' alt='Next' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
