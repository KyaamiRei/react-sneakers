import React, { useState } from "react";

import styles from "./Card.module.scss";

function Card(props) {
	const [isAdded, setIsAdded] = useState(false);

	const onClickAdd = () => {
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/heart_like.svg' alt='Liked' onClick={props.onFavorite} />
			</div>
			<img width={133} height={112} src={props.imageUrl} alt='Sneakers' />
			<p>{props.title}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<h5 className='price'>Цена:</h5>
					<b>{props.price} руб.</b>
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
