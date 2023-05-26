import { Card, Col, Button, Container, Row } from 'react-bootstrap';
import { BiHeart, BiStar, BiCalendarStar } from 'react-icons/bi';
import { AppContext } from '../../App';
import React, { useState } from 'react'

const CoverItem = (props) => {


	const context = React.useContext(AppContext);

	const [added, setAdded] = useState(context.isAdded);

	const onClickAdd = () => {
		setAdded(!added);
		let id = props.id;
		let myId = props.myId;
		let type = props.type;
		let name = props.name;
		let description = props.description;
		let price = props.price;
		let rating = props.rating;
		let image = props.image;
		props.onPlus({ id, myId, type, name, description, price, rating, image });
	}



	return (
		<>
			<Col xs={12} sm={6} md={4} lg={3}>
				<Card className="w-100 my-1" style={{ borderRadius: "30px" }}>
					<Card.Body >
						<div className="d-flex align-items-center mb-2" >
							<BiHeart size={20} />
							<Card.Title className="mb-0 ms-2">{props.name}</Card.Title>
						</div>
						<div className="d-flex justify-content-between">
							<Card.Img variant="top" src={props.image} style={{ width: '50%', marginBottom: '15px' }} />
							<Card.Text className="mx-3" style={{ fontSize: "0.8rem", width: '40%', }}>{props.description}</Card.Text>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<Card.Text>₽{props.price}</Card.Text>
							<Button variant="dark" type='button' className='btn btn-sm' style={{ width: '50%', padding: '0.1rem' }}
								onClick={onClickAdd} > {context.isAdded(props.myId) ?
									<img width={13}
										src={context.isAdded(props.myId) ? '/img/icon.png' : ''}
										alt="" /> : 'Добавить в корзину'}

							</Button>

						</div>
					</Card.Body>
				</Card>
			</Col >

		</>


	);
};

export default CoverItem;