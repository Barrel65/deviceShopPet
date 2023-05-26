import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Covers from './components/CardFields/Covers';
import Earphones from './components/CardFields/Earphones';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer';
import Cart from './components/CartPage/Cart';
import Favorites from './components/FavoritesPage/Favorites';


export const AppContext = React.createContext({});


function App() {

	//keeping products
	const [products, setProducts] = useState([]);
	//для избраннных
	const [favorites, setFavorites] = useState([]);
	//для корзины
	const [cartItems, setCartItems] = useState([]);



	useEffect(() => {
		async function axiosData() {
			const productsData = await axios.get('https://6470e2a53de51400f7250fbb.mockapi.io/products/');
			/* const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites'); */
			const cartData = await axios.get('https://6470e2a53de51400f7250fbb.mockapi.io/cart');
			setProducts(productsData.data);

			/* setFavorites(favoritesData.data) */
			setCartItems(cartData.data)
		}
		axiosData();
	}, [])


	const deleteItems = (id) => {
		axios.delete(`https://6470e2a53de51400f7250fbb.mockapi.io/cart/${id}`)
		setCartItems((objDelete) => objDelete.filter(item => item.id !== id))
	}




	const isAdded = (myId) => {
		return cartItems.some((objIsAdded) => objIsAdded.myId === myId)
	}


	/* const isFav = (myId) => {
		return favorites.some((objIsFav) => objIsFav.myId === myId)
	} */



	return (

		<AppContext.Provider
			value={
				{
					products,
					setProducts,
					cartItems,
					setCartItems,
					favorites,
					setFavorites,
					isAdded,
					/* isFav */
				}
			}>




			<div className='bg-light' >
				<div className='container' >
					<Router>
						<Header />
						<Routes>

							<Route path='/' element={
								[<Slider />,
								<Covers
									products={products}
									cartItems={cartItems}
									setCartItems={setCartItems}
									favorites={favorites}
									setFavorites={setFavorites}
								/>,
								<Earphones
									products={products}
									cartItems={cartItems}
									setCartItems={setCartItems}
									favorites={favorites}
									setFavorites={setFavorites}
								/>]
							} />

							< Route path='/cart'
								element={
									<Cart
										totalPrice={
											cartItems.reduce((element = cartItems.length, obj) =>
												element + obj.price, 0
											)
										}
										cartItems={cartItems}
										deleteItems={deleteItems}

									/>} />

							< Route path='/favorites'
								element={
									<Favorites
									/>} />


						</Routes>
					</Router >
					<Footer />

				</div >
			</div>
		</AppContext.Provider >
	);
}

export default App;
