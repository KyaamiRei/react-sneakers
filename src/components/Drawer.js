function Drawer({ onClose, items = [], onRemove }) {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='mb-20 d-flex justify-between'>
					Корзина
					<img
						onClick={onClose}
						className='removeBtn cu-p'
						src='/img/close_btn.svg'
						alt='Close'
					/>
				</h2>

				{items.length > 0 ? (
					<div>
						<div className='items'>
							{items.map((obj) => (
								<div key={obj.id} className='cartItem d-flex align-center mb-20'>
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
								<button className='greenButton'>
									Оформить заказ <img src='/img/row.svg' alt='Next' />
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
						<img
							className='mb-20'
							width={120}
							height={120}
							src='/img/empty-cart.png'
							alt='Empty Cart'
						/>
						<h2>Корзина пустая</h2>
						<p className='opacity-6'>Добавте что-то, чтобы сделать заказ</p>
						<button onClick={onClose} className='greenButton'>
							<img src='/img/back-arrow.svg' alt='Back' />
							Назад
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Drawer;
