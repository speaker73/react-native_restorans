import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Place from './place_detail';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resources:this.props.resources,
			opened: false,
			api:this.props.api
		}
	};
	closeAndOpen(state){
			this.setState({opened:false});
		
	}
	renderResources(){
		return this.state.resources.map((object)=>{
			return <Place key={object.key} open={this.state.opened} toggle={()=>{this.setState({opened:false}) }} style={{backgroundColor:'#ccc', marginTop:10, marginLeft:10, marginRight:10, padding:10}} textStyle={{color:'#eee'}} name={object.name} object={object}/>
		})
	}
	getResorans(api){
		if(!api) return;
		
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
				
				 
				 const responseText = JSON.parse(xhr.responseText);
				 if(responseText.status == 'OVER_QUERY_LIMIT'){
				 	this.setState({resources:[{key:42, name:responseText.status, error_message: responseText.error_message}]})
				 	return
				 }
				 const resources = responseText.results;
				 console.log(resources);
				 resources.forEach((obj, id)=>{
				 	obj.key = id;
				 })
				 setTimeout(()=>{
				 	this.setState({resources});
				 },1000)
				 
				}		 	
			};
		
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.api != this.state.api){
			//alert(nextProps.api);
			this.getResorans(nextProps.api);
		}
		
	}
  render() {

    return (
       <ScrollView  style={{flex:1}}>
       		{this.renderResources()}
       </ScrollView>
    );
  }
}
