import { useState, useContext } from "react";

import { AppContext } from "../../App";

import ContentLoader from "react-content-loader";

import styles from "./Card.module.scss";

function Card({
	id,
	title,
	price,
	imgUrl,
	onAddCart,
	favorited = false,
	loading = false,
}) {
	const { isItemAdded, onAddFavorites } = useContext(AppContext);

	const [isFavorite, setIsFavorite] = useState(favorited);

	const onClickAdd = () => {
		onAddCart({ id, title, price, imgUrl });
	};

	const onClickFavorite = () => {
		setIsFavorite(!isFavorite);
		onAddFavorites({ id, title, price, imgUrl });
	};

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={220}
					height={285}
					viewBox='0 0 150 265'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='0' y='0' rx='10' ry='10' width='150' height='150' />
					<rect x='0' y='168' rx='10' ry='10' width='150' height='15' />
					<rect x='0' y='192' rx='10' ry='10' width='100' height='15' />
					<rect x='118' y='230' rx='10' ry='10' width='32' height='32' />
					<rect x='0' y='234' rx='0' ry='0' width='80' height='25' />
				</ContentLoader>
			) : (
				<div className='p-40'>
					{favorited && (
						<div className={styles.favorite} onClick={onClickFavorite}>
							<img
								src={
									isFavorite
										? "/img/heart_in_favorite.svg"
										: "/img/heart_unlike.svg"
								}
								alt='Liked'
							/>
						</div>
					)}
					<img width={133} height={112} src={imgUrl} alt='Sneakers' />
					<p>{title}</p>
					<div className='d-flex justify-between align-center'>
						<div className='d-flex flex-column'>
							<h5 className='price'>Цена:</h5>
							<b>{price} руб.</b>
						</div>
						{onAddCart && (
							<img
								className={styles.plus}
								onClick={onClickAdd}
								src={isItemAdded(id) ? "/img/btn_added.svg" : "/img/plus.svg"}
								alt='plus'
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
