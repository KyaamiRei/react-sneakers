function CartItem() {
	return (
		<div className='cartItem d-flex align-center mb-20'>
			<div
				style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
				className='cartItemImg'
			></div>
			<div className='mr-20'>
				<p className='mb-5'>Sneakers</p>
				<b>12 997 руб.</b>
			</div>
			<img className='removeBtn' src='/img/close_btn.svg' alt='Remove' />
		</div>
	);
}

export default CartItem;
