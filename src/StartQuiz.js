import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import * as constants from './Constants.js';
import ImageSlides from './ImageSlides';
import PetMatch from './PetMatch';
import Result from './Result';
import petfamily from './petfamily.jpg';
import quiz from './quiz.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

class StartQuiz extends Component {
	constructor(props) {
    super(props);

    this.state = {
      modal: false,
	  first:'',
	  second:'',
	  third:'',
	  fourth:'',
	  answers:{},
	  progress:0,
	  isValid:false,
	  showResult: false,
	  error: false,
	  inputs:[{name:'EXT1',value:constants.EXT1},
			{name:'EXT2',value:constants.EXT2},
			{name:'EXT3',value:constants.EXT3},
			{name:'EXT4',value:constants.EXT4},
			{name:'EXT5',value:constants.EXT5},
			{name:'EXT6',value:constants.EXT6},
			{name:'EXT7',value:constants.EXT7},
			{name:'EXT8',value:constants.EXT8},
			{name:'EXT9',value:constants.EXT9},
			{name:'EXT10',value:constants.EXT10},
			{name:'EST1',value:constants.EST1},
			{name:'EST2',value:constants.EST2},
			{name:'EST3',value:constants.EST3},
			{name:'EST4',value:constants.EST4},
			{name:'EST5',value:constants.EST5},
			{name:'EST6',value:constants.EST6},
			{name:'EST7',value:constants.EST7},
			{name:'EST8',value:constants.EST8},
			{name:'EST9',value:constants.EST9},
			{name:'EST10',value:constants.EST10},
			{name:'AGR1',value:constants.AGR1},
			{name:'AGR2',value:constants.AGR2},
			{name:'AGR3',value:constants.AGR3},
			{name:'AGR4',value:constants.AGR4},
			{name:'AGR5',value:constants.AGR5},
			{name:'AGR6',value:constants.AGR6},
			{name:'AGR7',value:constants.AGR7},
			{name:'AGR8',value:constants.AGR8},
			{name:'AGR9',value:constants.AGR9},
			{name:'AGR10',value:constants.AGR10},
			{name:'CSN1',value:constants.CSN1},
			{name:'CSN2',value:constants.CSN2},
			{name:'CSN3',value:constants.CSN3},
			{name:'CSN4',value:constants.CSN4},
			{name:'CSN5',value:constants.CSN5},
			{name:'CSN6',value:constants.CSN6},
			{name:'CSN7',value:constants.CSN7},
			{name:'CSN8',value:constants.CSN8},
			{name:'CSN9',value:constants.CSN9},
			{name:'CSN10',value:constants.CSN10},
			{name:'OPN1',value:constants.OPN1},
			{name:'OPN2',value:constants.OPN2},
			{name:'OPN3',value:constants.OPN3},
			{name:'OPN4',value:constants.OPN4},
			{name:'OPN5',value:constants.OPN5},
			{name:'OPN6',value:constants.OPN6},
			{name:'OPN7',value:constants.OPN7},
			{name:'OPN8',value:constants.OPN8},
			{name:'OPN9',value:constants.OPN9},
			{name:'OPN10',value:constants.OPN10},	  
	  ]
    };
	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
	this.submitModal = this.submitModal.bind(this);
	this.questionChange = this.questionChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
  }
  openModal(){
	  this.setState({ modal: true, progress:0, error:false });
  }
  closeModal(){
	  this.setState({ modal: false });
  }
  submitModal(){
	  //if(Object.keys(this.state.answers).length===57)
		//  this.setState({isValid: true});
	  //this.setState({showResult: true});
	  if(Object.keys(this.state.answers).length===57){
		  this.setState({showResult: true})
	  }
	  else{
		  this.setState({error: true})
	  }
  }
  questionChange(e){
	  const { name, value } = e.target;
	  const newAnswers = {...this.state.answers,[name]:parseInt(value)};
	   this.setState({
		   answers : newAnswers,
		   progress: this.state.progress+1.75438596491
    });
  }
  handleClick(){
	  console.log("handle click");
  }
  
	
  render() {
	  let elem;
	  if(this.state.showResult){
		  elem=<div><Result answers={this.state.answers}/></div>
	  }
	  else{
		  elem = 
			<div>
				<ImageSlides /><br/>
				<PetMatch />
				<CardGroup>
				  <Card style={{backgroundColor:"#F0FFF0"}} border="light">
					  <br/>
						<Card.Body>
						  <center><Card.Title>Make a family complete!</Card.Title></center>
						  <center><Card.Text>
						  Very few things in life compare to the joy of bringing home an animal and watching them welcome your family like their own. Their infinite love and support, their mischievous tricks and silly habits – the list of things that make this experience incomparable are never ending.<br/> Find a furry new family member.
						  
						</Card.Text></center>
						</Card.Body>
						<center><img src={petfamily} width="60%"/></center><br/>
					  </Card>
					  <Card style={{backgroundColor:"#F0FFF0"}} border="light">
					   <br/>
						<Card.Body>
						  <center><Card.Title>Take the quiz!</Card.Title></center>
						  <center><Card.Text>
						  Make your selections below, and find your perfect match<br/>
						  Answer questions based on extraversion, agreeableness, openness, conscientiousness, and neuroticism - the big five personality traits. The quiz assesses your personality, based on which we suggest you with your ideal adoptable pets.<br/>
						  </Card.Text></center><br/>
						  <center><Button variant="secondary" onClick={this.openModal}>Find your match</Button></center>
						<Modal show={this.state.modal} size="lg">
							<Modal.Header>
								<Modal.Title>
									Matching Quiz<br/>
								</Modal.Title>
							</Modal.Header>			  
							<Modal.Body style={{padding:'2rem'}}>
								<Form>
									<ProgressBar now={this.state.progress} variant="success" position="fixed"/><br />
									{this.state.inputs.map((items, i) => (
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												{i+1+'. '+items.value}
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label={constants.STRONGLY_DISAGREE}
												value={1}
												name={items.name}
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label={constants.DISAGREE}
												value={2}
												name={items.name}
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label={constants.NEUTRAL}
												value={3}
												name={items.name}
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label={constants.AGREE}
												value={4}
												name={items.name}
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label={constants.STRONGLY_AGREE}
												value={5}
												name={items.name}
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									))}
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												51. How big or small will your new dog be?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Small"
												value={1}
												name="QUESTION1"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="Medium"
												value={2}
												name="QUESTION1"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="Large"
												value={3}
												name="QUESTION1"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="X Large"
												value={4}
												name="QUESTION1"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												52. Will he have any kids to snuggle with?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Yes"
												value={1}
												name="QUESTION2"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="No"
												value={2}
												name="QUESTION2"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												53. Will he have roommates? (Other pets)
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Yes"
												value={1}
												name="QUESTION3"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="No"
												value={2}
												name="QUESTION3"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												54. How much time can you dedicate to your new dog's grooming?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Occassional"
												value={1}
												name="QUESTION4"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="Weekly"
												value={2}
												name="QUESTION4"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="2-3 times a week"
												value={3}
												name="QUESTION4"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="Professional"
												value={4}
												name="QUESTION4"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												55. How much will your dog be able to play with you on a scale of 1 (least) - 4 (highest)?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="1"
												value={1}
												name="QUESTION5"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="2"
												value={2}
												name="QUESTION5"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="3"
												value={3}
												name="QUESTION5"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="4"
												value={4}
												name="QUESTION5"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												56. Do you stay in an apartment?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Yes"
												value={1}
												name="QUESTION6"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="No"
												value={2}
												name="QUESTION6"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
									
									<fieldset>
										<Form.Group as={Row}>
											<Form.Label as="legend" >
												57. Have you owned a dog before?
											</Form.Label>
											<Col sm={10}>
												<Form.Check inline
												type="radio"
												label="Yes"
												value={1}
												name="QUESTION7"
												onChange={this.questionChange}
												/>
												<Form.Check inline
												type="radio"
												label="No"
												value={2}
												name="QUESTION7"
												onChange={this.questionChange}
												/>
											</Col>
										</Form.Group>
									</fieldset>
								</Form>
								
							<center><p style={{color:"red"}}>{Math.min(Math.round(this.state.progress),100)}% Completed </p></center>
							{this.state.error &&
							<center><p style={{color:"red"}}>Please answer all questions</p></center>
							}
							</Modal.Body>
							<Modal.Footer>
							<Button variant="secondary" onClick={this.closeModal}>Close</Button>
							<Button variant="primary" onClick={this.submitModal}>See my results</Button>
							</Modal.Footer>
						</Modal>
						</Card.Body>
						<center><img src={quiz} width="60%"/></center><br/>
				  </Card>
				</CardGroup><br/>
			</div>
	  }
    return (
	<div>
		{elem}
	</div>
    );
  }
}

export default StartQuiz;