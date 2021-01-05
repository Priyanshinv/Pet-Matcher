import React, { Component } from 'react';
import Menu from './Menu';
import StartQuiz from './StartQuiz';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <BrowserRouter>
			  <div>
				<Menu />
				<Switch>
				  <Route exact path='/' component={StartQuiz}/>
				  <Route path='/contact' component={ContactUs}/>
				  <Route path='/about' component={AboutUs}/>
				</Switch>
			  </div>     
		</BrowserRouter>
      </div>
    );
  }
}

export default App;

