import React from 'react'
import CartItem from './CartItem'
import { Button } from 'react-bootstrap';

const Cart = (props) => {






	return (
		<div>
			<h4>Корзина</h4>
			<div>
				{
					props.cartItems.length > 0 ?
						<div>
							{
								props.cartItems.map(obj => {
									return (
										<CartItem
											key={obj.id}
											id={obj.id}
											myId={obj.myId}
											name={obj.name}
											description={obj.description}
											price={obj.price}
											rating={obj.rating}
											image={obj.image}
											deleteItems={props.deleteItems}
										/>
									)
								})
							}
						</div>

						: <h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>

				}
				<div className='row'>
					<div className='col-md-8 offset-md-2'>
						<p>Итог</p>
						<p>{props.totalPrice}</p>
						<Button type='button' variant="dark" className='w-10 btn btn-lg btn-primary' >сделать заказ</Button>

					</div>
				</div>
			</div>
		</div >
	)
}

export default Cart