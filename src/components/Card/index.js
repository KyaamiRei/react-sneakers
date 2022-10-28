import React, { useState } from "react";

import styles from "./Card.module.scss";

function Card({ title, price, imgUrl, onFavorite, onAddCart }) {
	const [isAdded, setIsAdded] = useState(false);

	const onClickAdd = () => {
		onAddCart({ title, price, imgUrl });
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/heart_like.svg' alt='Liked' onClick={onFavorite} />
			</div>
			<img width={133} height={112} src={imgUrl} alt='Sneakers' />
			<p>{title}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<h5 className='price'>Цена:</h5>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickAdd}
					src={isAdded ? "/img/btn_added.svg" : "/img/plus.svg"}
					alt='plus'
				/>
			</div>
		</div>
	);
}

export default Card;
