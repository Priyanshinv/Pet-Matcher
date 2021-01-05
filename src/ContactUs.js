import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import contact from './contact.jpg';
import email from './email.png';
import phone from './phone.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class ContactUs extends Component {
  render() {
    return (
	<div>
		<img src={contact} width="100%"/> <br/><br/>
		<h4><center> Get in touch </center></h4>
		<p><center> Dear Pet Owners, thank you for choosing us. You can reach out to us at: </center></p>
		<CardGroup>
		  <Card>
			  <br/>
			  <center><img src={email} width="10%"/></center>
				<Card.Body>
				  <center><Card.Title>Email us at:</Card.Title></center>
				  <center><Card.Text>
				  vorapriyanshi2@gmail.com
				  </Card.Text></center>
				</Card.Body>
			  </Card>
			  <Card>
			   <br/>
			  <center><img src={phone} width="10%"/></center>
				<Card.Body>
				  <center><Card.Title>Call us at:</Card.Title></center>
				  <center><Card.Text>
				  +1 415-272-6799
				  </Card.Text></center>
				</Card.Body>
		  </Card>
		</CardGroup><br/>
	</div>
    );
  }
}

export default ContactUs;