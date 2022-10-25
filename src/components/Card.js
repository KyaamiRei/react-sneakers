function Card() {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='/img/heart_like.svg' alt='Liked' />
			</div>
			<img width={133} height={112} src='/img/sneakers/2.jpg' alt='Sneakers' />
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
	);
}

export default Card;
