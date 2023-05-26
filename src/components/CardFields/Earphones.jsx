import React from 'react'
import EarphonesItem from './EarphonesItem';
import axios from 'axios'
import { Container, Row } from 'react-bootstrap';

const Earphones = (props) => {

	const onAddCart = async (obj) => {
		try {
			const findCart = props.cartItems.find(objOver => objOver.myId === obj.myId)
			if (findCart) {
				axios.delete(`https://6470e2a53de51400f7250fbb.mockapi.io/cart/${findCart.id}`)
				props.setCartItems((objs) => objs.filter(o => o.myId !== obj.myId))
			}
			else {
				const { data } = await axios.post(`https://6470e2a53de51400f7250fbb.mockapi.io/cart/`, obj)
				props.setCartItems([...props.cartItems, data])
			}
		}
		catch {
			alert('Произошла ошибка')
		}
	}


	/* const onAddFav = async (obj) => {
		try {
			const findFavorites = props.favorites.find(objFav => objFav.myId === obj.myId)
			if (findFavorites) {
				axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
				props.setFavorites((over) => over.filter(o => o.myId !== obj.myId))
			}
			else {
				const { data } = await axios.post(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/`, obj)
				props.setFavorites([...props.favorites, data])
			}
		}
		catch {
			alert('Произошла ошибка')
		}
	} */






	return (
		<div>
			<Container >
				<Row className="pb-0">
					<p className='text-muted pt-5'>Наушники</p>
					{
						props.products.map(obj => {
							if (obj.type === "earphones") {
								return (
									<EarphonesItem
										key={obj.id}
										id={obj.id}
										myId={obj.myId}
										name={obj.name}
										description={obj.description}
										price={obj.price}
										rating={obj.rating}
										image={obj.image}

										/* favBtn={(favObj) => {
											onAddFav(favObj)
										}}
			 */
										onPlus={(cartObj) => {
											onAddCart(cartObj)
										}}

									/>
								)
							}

						})
					}
				</Row>
			</Container>



		</div>


	)
}

export default Earphones