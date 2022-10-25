function App() {
	return (
		<div className='wrapper clear'>
			<div className='overlay'>
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
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
								className='cartItemImg'
							></div>
							<div className='mr-20'>
								<p className='mb-5'>Sneakers</p>
								<b>12 997 руб.</b>
							</div>
							<img
								className='removeBtn'
								src='/img/close_btn.svg'
								alt='Remove'
							/>
						</div>
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

			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img alt='logo' width={40} height={40} src='/img/logo.png' />
					<div>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>Магазин кросовок</p>
					</div>
				</div>

				<ul className='d-flex'>
					<li className='mr-30'>
						<img alt='cart' width={18} height={18} src='/img/cart.svg' />
						<span>100 руб.</span>
					</li>
					<li className='mr-30'>
						<img
							alt='favorite'
							width={18}
							height={18}
							src='/img/favorite.svg'
						/>
					</li>
					<li>
						<img alt='user' width={18} height={18} src='/img/user.svg' />
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кросcовки</h1>
					<div className='search-block d-flex align-center'>
						<img alt='favorite' width={18} height={18} src='/img/search.svg' />
						<input placeholder='Поиск ...' />
					</div>
				</div>
				<div className='d-flex'>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/heart_unlike.svg' alt='Unliked' />
						</div>
						<img
							width={133}
							height={112}
							src='/img/sneakers/1.jpg'
							alt='Sneakers'
						/>
						<p>Sneakers</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<h5 className='price'>Цена:</h5>
								<b>12 900 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/heart_like.svg' alt='Liked' />
						</div>
						<img
							width={133}
							height={112}
							src='/img/sneakers/2.jpg'
							alt='Sneakers'
						/>
						<p>Sneakers</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<h5 className='price'>Цена:</h5>
								<b>12 900 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/heart_in_favorite.svg' alt='Favorite' />
						</div>
						<img
							width={133}
							height={112}
							src='/img/sneakers/3.jpg'
							alt='Sneakers'
						/>
						<p>Sneakers</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<h5 className='price'>Цена:</h5>
								<b>12 900 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
