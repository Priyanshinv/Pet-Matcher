import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import petmatch from './petmatch.png';

class PetMatch extends Component {
  render() {
    return (
		<div>
			<Card border="light">
				  <br/>
					<Card.Body>
					  <center><img src={petmatch} width="10%"/></center>
					  <center><Card.Title>What's your Pawsonality?</Card.Title></center>
					  <center><Card.Text>
					  Our Petmatch tool will match your personality and preferences with pet personality traits to find the perfect pet for you.<br/>
					  Simply fill out our Petmatch questionnaire, look through pets that fit your personality and pick your perfect Petmatch!<br/><br/>
					  <a href="/about" >See how it works?</a>
					  </Card.Text></center>
					</Card.Body>
			</Card><br/><br/><br/>
		</div>
    );
  }
}

export default PetMatch;