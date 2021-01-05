import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dog from './dog.png';
import list from './list.png';
import match from './match.png';
import search from './search.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class AboutUs extends Component {
  render() {
    return (
	<div>
			<center><img src = {dog} width="10%"/>
			<h3> How it works </h3></center><br/>
			<CardGroup>
			  <Card border="light">
			  <br/>
			  <center><img src={list} width="10%"/></center>
				<Card.Body>
				  <center><Card.Title>Pet Matching Quiz</Card.Title></center>
				  <Card.Text>
				  We have developed a 5-minute quiz that matches people and pets based on compatibility. Answer questions relating to extraversion, agreeableness, openness, conscientiousness, and neuroticism - the big five personality traits. The quiz assesses your personality.
				  </Card.Text>
				</Card.Body>
			  </Card>
			  <Card border="light">
			   <br/>
			   <center><img src={match} width="10%"/></center>
				<Card.Body>
				  <center><Card.Title>Your ideal pet</Card.Title></center>
				  <Card.Text>
				  Using Artificial Intelligence, results are tailored to match you with your ideal pet. Based on your quiz answers, the algorithm determines your personality type and aims to match you with pets of similar personality traits.
				  </Card.Text>
				</Card.Body>
			  </Card>
			   <Card border="light">
			   <br/>
			   <center><img src={search} width="10%"/></center>
				<Card.Body>
				  <center><Card.Title>Matching pets list</Card.Title></center>
				  <Card.Text>
				  The results include a list of matching pets and their descriptions to help you understand what to look for in your next best friend.
				  </Card.Text>
				</Card.Body>
			  </Card>
			</CardGroup>
		 <br/>
	</div>
    );
  }
}

export default AboutUs;