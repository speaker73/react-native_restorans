import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './header';
import Footer from './footer';
import Main from './main';
import Button from './button';
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
      (error) => {
        console.log( JSON.stringify(error) );
        const position = {
          coords:{
            latitude:49.2312487,
            longitude:28.4229046
          }
        };
        this.setState({position, api:apiFun(position, this.state.radius) })
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}

setFake(radius){
  const position = {
          coords:{
            latitude:49.2312487,
            longitude:28.4229046
          }
        };
  this.setState({position, api:apiFun(position, radius) })
}
  render() {
    return (
      <View style={{flex:1, justifyContent:'space-between',backgroundColor:'#913f11'}}>
       <Header style={{backgroundColor:'bisque', height:40, alignItems:'center', justifyContent:'center', borderBottomWidth:1}} textStyle={{color:'black', fontSize:16}} title={this.state.title} />
          <View style={{justifyContent:'center', alignItems:'center', paddingVertical:10}}>
            <Text style={{color:'#fff'}}> Places from {this.state.radius} m. Cor: {this.state.position && this.state.position.coords.latitude}{ this.state.position&&(', ') }{this.state.position && this.state.position.coords.longitude}</Text>
          </View>
       <View style={{flexDirection:'row', justifyContent:'space-around', paddingBottom:10}}> 
          <Button 
            text="Fake Test"
            onPress={()=>{this.setFake(this.state.radius)}}
          /> 
          <Button 
            text="Choise one"
            onPress={ ()=>{this.setState({choise:!this.state.choise}) } }
          />                   

       </View>
          
        
       
       <Main onChoise={this.state.choise}  resources={this.state.resources} api={this.state.api}/>
       <Footer styleText={{color:'white', paddingLeft:10, paddingBottom:4}} style={{justifyContent:'flex-end',height:40,backgroundColor:'crimson'}} text={this.state.footerText}/>
      </View>
    );
  }
}

