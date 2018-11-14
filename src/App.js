import React, { Component } from 'react';
import './App.css';

import {getCountryIndicator} from './services/request.handler';

class App extends Component {
	
	constructor(){
		super();
				
		this.state = {
			countries: {
				'united states':{},
				'canada':{
					'gdp':'fgbvfgbfg'
				},
				'italy':{},
				'israel':{},
				'united kingdom':{},
				'russia':{},
				'ukraine':{},
				'germany':{},
				},
			indicators: [
			'gdp-growth-rate','government-debt-to-gdp','gdp-per-capita','interest-rate','rating','inflation-rate','personal-income-tax-rate','wages', 'core-consumer-prices','gdp',
			'unemployment-rate' 
			]
		};
		this.getCountryIndicator = this.getCountryIndicator.bind(this);
		this.getAllCountries = this.getAllCountries.bind(this);
		
		this.getAllCountries();
	}
	
	countries = {
				'united states':{},
				'canada':{
					'gdp':'fgbvfgbfg'
				},
				'italy':{},
				'israel':{},
				'united kingdom':{},
				'russia':{},
				'ukraine':{},
				'germany':{},
				};
	
	componentDidMount(){
		//this.getAllCountries();
	}
	
	convertSpaces(item){		
		return item.replace(' ','%20');
	}
	
	getCountryIndicator(country,indicator){
		let convertedCountry = this.convertSpaces(country);
		
		return getCountryIndicator(convertedCountry,indicator);
	};
	
	/*
	 * TODO
	 * Create promise and set received objects after resolved
	 */
	getAllCountries(){
		let countries = {};
		//let countries = {'canada':{} };
		
		for( let c in this.state.countries){
			let countryIndicators = {};		
			//let countryIndicators = {'gdp':'11111111111'};		
			
			for(let i of this.state.indicators ){
				
				this.getCountryIndicator( c,i )
					.then( (repos)=> {
						countryIndicators[c] = repos;
					})
					.catch( (err)=> {
						console.log(err);
					});
			}
			
			console.log(countryIndicators.gdp);
			
			countries[c] = countryIndicators;
			if(countries[c].gdp)
				console.log(countries[c].gdp);
		}
		//this.setState({ countries:countries },()=>{
		this.countries = countries;
		
		let canada = this.countries.canada;
			console.log(  canada.gdp );
			console.log(  canada );
		//});
	}
	
  render() {
	  
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
