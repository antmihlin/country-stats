import React, { Component } from 'react';
import './App.css';

import {getCountryIndicator} from './services/request.handler';

class App extends Component {
	
	constructor(){
		super();
				
		this.state = {
			countries: [
				{title:'Russia',code:'rus'},
				{title:'Unites States',code:'usa'},
				{title:'Canada',code:'can'},
				{title:'Israel',code:'isr'},
				{title:'Italy',code:'ita'},
				{title:'United kingdom',code:'gbr'},
				{title:'Ukraine',code:'ukr'},
				{title:'Germany',code:'deu'},
			],		
			indicators: [
				{ title:'GDP per capita', code: 'NY.GDP.PCAP.KN'},
				{ title:'Adjusted net national income per capita (current US$)', code: 'NY.ADJ.NNTY.PC.CD'},
				{ title:'GDP PPP', code: 'NY.GDP.MKTP.PP.CD'},
				{ title:'Total employed %', code: 'SL.EMP.WORK.ZS'},
				
				{ title:'Adjusted net national income per capita', code: 'NY.ADJ.NNTY.PC.CD'},

				{ title:'Governmental debt (% of GDP)', code: 'GC.DOD.TOTL.GD.ZS'},//lower - better
				{ title:'Inflation, consumer prices % (Retail price increase)', code: 'FP.CPI.TOTL.ZG'},//lower - better
				{ title:'Inflation %', code: 'NY.GDP.DEFL.KD.ZG'},//lower - better
				{ title:'Non performing loans %', code: 'FB.AST.NPER.ZS'},//lower - better
				
				//{ title:'GDP', code: 'NY.GDP.MKTP.CD'},
				//{ title:'Real interest rate', code: 'FR.INR.RINR'},
				//{ title:'Tax revenue (% of GDP)', code: 'GC.TAX.TOTL.GD.ZS'},
				//{ title:'Imports of goods and services (% of GDP)', code: 'NE.IMP.GNFS.ZS'},
				//{ title:'Exports of goods and services (% of GDP)', code: 'NE.EXP.GNFS.ZS'},							
			]
		};
		this.getCountryIndicator = this.getCountryIndicator.bind(this);
		this.getAllCountries = this.getAllCountries.bind(this);
		
	}
	
	componentDidMount(){
		this.getAllCountries();
	}
	
	convertSpaces(item){		
		return item.replace(' ','%20');
	}
	
	/*
	 * Define index of indicators
	 * 
	 * find country with highest indicator 
	 * set as 100
	 * rest countries rank compared to highest
	 */
	
	defineIndexFromNum(){
		//sum indicators of country
		//compare
		//Highest sum receives highest index (100%)
		//
	}
	
	defineIndexFromPercentage(){
		/*
		 * No need as already indexed by 100%
		 * 
		 */
	}
	
	getCountryIndicator(country,indicator){
		let convertedCountry = this.convertSpaces(country);
		
		return getCountryIndicator(convertedCountry,indicator);
	};

	getAllCountries(){
		let countries = {};
		let countriesCodes = this.state.countries.map( c=> c.code );
		let indicatorsCodes = this.state.indicators.map( i=> i.code );
		
		for( let c of countriesCodes){
			let countryIndicators = {};				
			
			for(let i of indicatorsCodes ){
				
				this.getCountryIndicator( c,i )
					.then( (repos)=> {
						//Last year
						//Previous year
						countryIndicators[i] = repos[1][1];
					})
					.catch( (err)=> {
						console.log(err);
					});
			}
						
			countries[c] = countryIndicators;
		}
		this.setState({ countries:countries },()=>{
			
			setTimeout( ()=>{
				let countriesReceived =  this.state.countries;
				console.log( countriesReceived );
			},2000 );

		});
	}

	
  render() {
	  
	  //let countriesToView = [];
	  
		//let elements = [];

		//for( let c in this.state.countries ){
			//elements.push(< key={c} index={c}  />);
		//}
			  
		return (
		  <div className="App">
			<header className="App-header">

			</header>
		  </div>
		);
  }
}

export default App;
