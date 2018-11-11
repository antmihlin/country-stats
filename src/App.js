import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getCountryIndicator} from './services/request.handler';

class App extends Component {
	
	constructor(){
		super();
				
		this.state = {
			countries: {
				'united states':{},
				'canada':{},
				'italy':{},
				'israel':{},
				'united kingdom':{},
				'russia':{},
				'ukraine':{},
				'germany':{},
				},
			indicators: [
			'gdp','gdp-growth-rate','government-debt-to-gdp','gdp-per-capita','interest-rate','rating','inflation-rate','personal-income-tax-rate','wages', 'core-consumer-prices',
			'unemployment-rate'
			]
		};
		
	}
	
	componentDidMount(){
		this.getAllCountries();
	}
	
	convertSpaces(item){		
		return item.replace(' ','%20');
	}
	
	getCountryIndicator(country,indicator){
		let convertedCountry = this.convertSpaces(country);
		
		return getCountryIndicator(convertedCountry,indicator);
	};
	
	getAllCountries(){
		let countries = {};
		
		for( let c in this.state.countries){
			let countryIndicators = {};		
			
			for(let i of this.state.indicators ){
				
				this.getCountryIndicator( c,i )
					.then(function (repos) {
						countryIndicators[i] = repos;
					})
					.catch(function (err) {
						console.log(err);
					});
			}
			
			countries[c] = countryIndicators;
		}
		this.setState({ countries:countries });
	}
	
  render() {
	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
