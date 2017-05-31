import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Footer from './footer';
import Main from './main';
export default class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      title:'Where are u eat?',
      footerText:'All rights reserved',
      resources:['Loading...']
    };
	};

  render() {
    return (
      <View style={{flex:1, justifyContent:'space-between',}}>
       <Header style={{backgroundColor:'blue', height:40, alignItems:'center', justifyContent:'center'}} textStyle={{color:'white', fontSize:16}} title={this.state.title} />
        <Text> Places from 1000 m</Text>
       <Main resources={this.state.resources} />
       <Footer styleText={{color:'white', paddingLeft:10, paddingBottom:4}} style={{justifyContent:'flex-end',height:40,backgroundColor:'red'}} text={this.state.footerText}/>
      </View>
    );
  }
}

