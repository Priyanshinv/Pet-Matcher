import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gr from './gr.jpg';
import lab from './lab.jpg';
import bull from './bull.jpg';
import beagle from './beagle.jpg';
import pug from './pug.jpg';
import pom from './pom.jpg';
import bernese from './bernese.jpg';
import boxer from './boxer.jpg';
import chihuahua from './chihuahua.jpg';
import Carousel from 'react-bootstrap/Carousel';

class ImageSlides extends Component {
  render() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={gr}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q>Scratch a dog and you’ll find a permanent job</q> <br/>– Franklin P. Jones</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={lab}
					alt="Third slide"
					/>

					<Carousel.Caption>
						<h3><q> A dog is the only thing on earth that loves you more than you love yourself </q> <br/>– Josh Billings</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={bull}
					alt="Third slide"
					/>

					<Carousel.Caption>
						<h3><q> There is no faith which has never yet been broken, except that of a truly faithful dog </q> <br/>– Konrad Lorenz</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={beagle}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> The bond with a true dog is as lasting as the ties of this earth will ever be </q> <br/> – Konrad Lorenz</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={pug}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> The dog lives for the day, the hour, even the moment. </q> <br/> – Robert Falcon Scott</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={pom}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> Dogs do speak, but only to those who know how to listen. </q> <br/>– Orhan Pamuk</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={bernese}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> When you adopt a dog, you have a lot of very good days and one very bad day. </q> <br/> – W. Bruce Cameron</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={boxer}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> Whoever said you can’t buy happiness forgot little puppies. </q> <br/>– Gene Hill</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					height="600rem"
					className="d-block w-100"
					src={chihuahua}
					alt="First slide"

					/>
					<Carousel.Caption>
						<h3><q> My fashion philosophy is, if you’re not covered in dog hair, your life is empty. </q> <br/> – Elayne Boosler</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
    );
  }
}

export default ImageSlides;