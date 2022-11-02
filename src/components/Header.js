import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

function Header(props) {
	const { totalPrice } = useCart();

	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<Link to='/'>
					<img alt='logo' width={40} height={40} src='img/logo.png' />
				</Link>

				<div>
					<h3 className='text-uppercase'>React Sneakers</h3>
					<p className='opacity-5'>Магазин кросовок</p>
				</div>
			</div>

			<ul className='d-flex'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<img alt='cart' width={18} height={18} src='img/cart.svg' />
					<span>{totalPrice} руб.</span>
				</li>
				<li className='mr-30'>
					<Link to='/favorites'>
						<img
							alt='favorite'
							width={18}
							height={18}
							src='img/favorite.svg'
						/>
					</Link>
				</li>
				<li>
					<Link to='/orders'>
						<img alt='user' width={18} height={18} src='img/user.svg' />
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
