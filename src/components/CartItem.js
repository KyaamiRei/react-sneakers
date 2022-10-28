function CartItem(props) {
	return (
		<div className='cartItem d-flex align-center mb-20'>
			<div
				style={{ backgroundImage: `url(${props.imgUrl})` }}
				className='cartItemImg'
			></div>
			<div className='mr-20'>
				<p className='mb-5'>{props.title}</p>
				<b>{props.price} руб.</b>
			</div>
			<img className='removeBtn' src='/img/close_btn.svg' alt='Remove' />
		</div>
	);
}

export default CartItem;
