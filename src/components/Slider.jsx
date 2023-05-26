import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
	return (
		<Carousel fade controls={false} interval={2000} indicators={false} style={{ marginTop: '20px', marginBottom: '20px' }}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/img/slider/1.jpg"
					alt="Slide 1"
					style={{ borderRadius: '30px' }}
				/>
				<Carousel.Caption className="text-white caption-left">
					<h2 className="text-center" style={{ fontSize: '30px', marginLeft: '7%', marginTop: '-15%', width: '30%' }}>
						Аксессуары для Iphone 14 Pro Max
					</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/img/slider/2.jpg"
					alt="Slide 2"
					style={{ borderRadius: '30px' }}
				/>
				<Carousel.Caption className="text-white caption-left">
					<h2 className="text-center" style={{ fontSize: '30px', marginLeft: '7%', marginTop: '-15%', width: '30%' }}>
						Проводные и безпроводные Apple EarPods
					</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/img/slider/3.jpg"
					alt="Slide 3"
					style={{ borderRadius: '30px' }}
				/>
				<Carousel.Caption className="text-white caption-left">
					<h2 className="text-center" style={{ fontSize: '30px', marginLeft: '7%', marginTop: '-15%', width: '30%' }}>
						Беспроводные зарядные устройства
					</h2>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;