import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaPhone, FaGlobe, FaVk, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: 'white', borderRadius: '30px 30px 0 0', paddingTop: '20px', paddingBottom: '20px', marginTop: "40px", marginButton: "-30px" }}>
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={4}>
						<h4>EQUIP</h4>
					</Col>
					<Col xs={6} md={2}>
						<ul className="list-unstyled">
							<li>
								<a href="/cart" style={{ color: 'black', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
									<FaShoppingCart /> Корзина
								</a>
							</li>
							<li>
								<a href="/favorites" style={{ color: 'black', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
									<FaHeart /> Избранное
								</a>
							</li>
							<li>
								<a href="/contacts" style={{ color: 'black', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
									<FaPhone /> Контакты
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={6} md={2}>
						<div className="d-flex flex-column align-items-center">
							<a href="#" style={{ color: 'black', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
								<div className="mt-2">
									<FaGlobe /><span>Eng</span> / <span>Rus</span>
								</div>
							</a>
						</div>
					</Col>
					<Col xs={12} md={4} className="d-flex justify-content-end">
						<a href="#" style={{ color: 'black', textDecoration: 'none', marginRight: '0.5em', ':hover': { textDecoration: 'underline' } }}>
							<FaVk style={{ fontSize: '2em' }} />
						</a>
						<a href="#" style={{ color: 'black', textDecoration: 'none', marginRight: '0.5em', ':hover': { textDecoration: 'underline' } }}>
							<FaTwitter style={{ fontSize: '2em' }} />
						</a>
						<a href="#" style={{ color: 'black', textDecoration: 'none', marginRight: '0.5em', ':hover': { textDecoration: 'underline' } }}>
							<FaInstagram style={{ fontSize: '2em' }} />
						</a>
						<a href="#" style={{ color: 'black', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
							<FaTelegram style={{ fontSize: '2em' }} />
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;