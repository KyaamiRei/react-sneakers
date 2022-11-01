import Card from "../components/Card";

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddFavorite,
	onAddCart,
	isLoading,
}) {

	const renderItems = () => {
		const filtredItems = items.filter((item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		);

		return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
			<Card
				loading={isLoading}
				key={index}
				onAddCart={(obj) => {
					onAddCart(obj);
				}}
				{...item}
			/>
		));
	};

	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросcовки"}
				</h1>
				<div className='search-block d-flex align-center'>
					<img alt='favorite' width={18} height={18} src='/img/search.svg' />
					{searchValue ? (
						<img
							onClick={() => {
								setSearchValue("");
							}}
							className='clear cu-p'
							src='/img/close_btn.svg'
							alt='Clear'
						/>
					) : null}
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder='Поиск ...'
					/>
				</div>
			</div>
			<div className='d-flex flex-wrap'>{renderItems()}</div>
		</div>
	);
}

export default Home;
