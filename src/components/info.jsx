import { useContext } from "react";

import { AppContext } from "../App";

const Info = ({ title, description, image }) => {
	const { setCartOpened } = useContext(AppContext);

	return (
		<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
			<img
				className='mb-20'
				width={120}
				src={image}
				alt='Empty Cart'
			/>
			<h2>{title}</h2>
			<p className='opacity-6'>{description}</p>
			<button onClick={() => setCartOpened(false)} className='greenButton'>
				<img src='img/back-arrow.svg' alt='Back' />
				Назад
			</button>
		</div>
	);
};

export default Info;
