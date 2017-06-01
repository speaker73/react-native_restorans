import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './header';
import Footer from './footer';
import Main from './main';
function apiFun(position, radius){
if(!position) return;
    const api_sett = {
          cor :`${position.coords.latitude},${position.coords.longitude}`,
          radius: radius
        };    
  
 
  const api = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+api_sett.cor+'&radius='+api_sett.radius+'&type=food&key=AIzaSyAFZ8xYjGLiOs-2s7uM0LhPtH4ii_10Q8U';
  console.log(api, position);
  return api
}



export default class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      title:'Where are u eat?',
      footerText:'All rights reserved',
      resources:[{name:'Loading...',key:42}],
      position:false,
      radius: 1000,
    };
	};
componentDidMount(){
  navigator.geolocation.getCurrentPosition(
      (position) => {
        
        console.log(position);
        this.setState({position, api:apiFun(position, this.state.radius)});

      },
      (error) => console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}
  render() {
    return (
      <View style={{flex:1, justifyContent:'space-between',}}>
       <Header style={{backgroundColor:'blue', height:40, alignItems:'center', justifyContent:'center'}} textStyle={{color:'white', fontSize:16}} title={this.state.title} />
        <Text> Places from {this.state.radius} m</Text>
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#3ae', flex:.1}}><Text style={{color:'#eee'}}>CHOISE</Text></TouchableOpacity>
        <Text> {this.state.position && this.state.position.coords.latitude}{ this.state.position&&(', ') }{this.state.position && this.state.position.coords.longitude}</Text>
       <Main onChoise={this.state.choise} isChoises={()=>{this.setState({choise:false}) }} resources={this.state.resources} api={this.state.api}/>
       <Footer styleText={{color:'white', paddingLeft:10, paddingBottom:4}} style={{justifyContent:'flex-end',height:40,backgroundColor:'red'}} text={this.state.footerText}/>
      </View>
    );
  }
}

