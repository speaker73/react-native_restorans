import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Place from './place_detail';
const api_sett = {
					cor :'49.2253923,28.4327571',
					radius: 1000
				};

const api = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+api_sett.cor+'&radius='+api_sett.radius+'&type=food&key=AIzaSyAFZ8xYjGLiOs-2s7uM0LhPtH4ii_10Q8U';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resources:this.props.resources
		}
	};
	renderResources(){
		return this.state.resources.map((object)=>{
			return <Place toggle={true} style={{backgroundColor:'#ccc', marginTop:10, marginLeft:10, marginRight:10, padding:10}} textStyle={{color:'#eee'}} name={object.name} object={object}/>
		})
	}
	getResorans(){
		console.log('xhr start', api);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', api);
		xhr.send();
		 xhr.onreadystatechange = () => {
		 	if (xhr.readyState != 4) return;
			if (xhr.status != 200) {
			  // обработать ошибку
			// console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
			}else{
				 console.log(xhr);
				 const resources = JSON.parse(xhr.responseText).results;
				 
				 console.log(resources);
				 setTimeout(()=>{
				 	this.setState({resources});
				 },1000)
				 
				}		 	
			};
		
	}
	componentDidMount(){
		this.getResorans();
	}
  render() {

    return (
       <ScrollView  style={{flex:1}}>
       		{this.renderResources()}
       </ScrollView>
    );
  }
}
