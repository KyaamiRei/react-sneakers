import Card from "../components/Card";

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddFavorites,
	onAddCart,
}) {
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
			<div className='d-flex flex-wrap'>
				{items
					.filter((item) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((item) => (
						<Card
							key={item.id}
							onAddFavorite={(obj) => {
								onAddFavorites(obj);
							}}
							onAddCart={(obj) => {
								onAddCart(obj);
							}}
							{...item}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;
