import { Card, Col, Button } from 'react-bootstrap';
import { BiHeart, BiStar, BiCalendarStar } from 'react-icons/bi';
import { AppContext } from '../../App';
import React, { useState } from 'react'

const CartItem = (props) => {



	return (
		<div className='d-flex justify-content-between pb-3'>
			<Col xs={10} sm={10} md={10} lg={10} className='offset-2'>
				<Card className="w-100 my-1" style={{ borderRadius: "30px" }}>
					<Card.Body>
						<div className="d-flex justify-content-between">
							<div className="d-flex align-items-center">
								<Card.Img variant="top" src={props.image} style={{ width: '8%', marginRight: '15px' }} />
								<div>
									<div className="d-flex align-items-center mb-2">
										<BiHeart size={20} />
										<Card.Title className="mb-0">{props.name}</Card.Title>
									</div>

									<Card.Text className="mb-1" style={{ fontSize: "0.8rem" }}>{props.description}</Card.Text>
								</div>
							</div>
							<div>
								<Card.Text>₽{props.price}</Card.Text>
								<Button variant="dark" type='button' className='btn btn-m btn-primary'
									onClick={() => props.deleteItems(props.id)} >
									Удалить из корзины
								</Button>
							</div>
						</div>

					</Card.Body>
				</Card>
			</Col>
		</div >


	);
};

export default CartItem;