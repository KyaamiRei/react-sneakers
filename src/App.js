function App() {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img alt='logo' width={40} height={40} src='/img/logo.png' />
					<div>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className="opacity-5">Магазин кросовок</p>
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
				<h1 className='mb-40'>Все кросcовки</h1>
				<div className='d-flex'>
					<div className='card'>
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
