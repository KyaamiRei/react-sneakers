import React, { useState } from "react";

import styles from "./Card.module.scss";

function Card({
	id,
	title,
	price,
	imgUrl,
	onAddFavorite,
	onAddCart,
	favorited = false,
}) {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(favorited);

	const onClickAdd = () => {
		onAddCart({ title, price, imgUrl });
		setIsAdded(!isAdded);
	};

	const onClickFavorite = () => {
		setIsFavorite(!isFavorite);
		onAddFavorite({ id, title, price, imgUrl });
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img
					src={
						isFavorite ? "/img/heart_in_favorite.svg" : "/img/heart_unlike.svg"
					}
					alt='Liked'
				/>
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
