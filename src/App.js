import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
	{
		title: "Кросовки №1",
		price: 12999,
		imgUrl: "/img/sneakers/1.jpg",
	},
	{
		title: "Кросовки №2",
		price: 12999,
		imgUrl: "/img/sneakers/2.jpg",
	},
	{
		title: "Кросовки №3",
		price: 12999,
		imgUrl: "/img/sneakers/3.jpg",
	},
];

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кросcовки</h1>
					<div className='search-block d-flex align-center'>
						<img alt='favorite' width={18} height={18} src='/img/search.svg' />
						<input placeholder='Поиск ...' />
					</div>
				</div>
				<div className='d-flex'>
					{arr.map((val) => (
						<Card
							title={val.title}
							price={val.price}
							imageUrl={val.imgUrl}
							onFavorite={() => console.log(val)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
