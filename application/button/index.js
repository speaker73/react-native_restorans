import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default class Button extends Component {
	constructor(props) {
		super(props);
	};


  render() {
    return (
    <View  style={[{alignItems:'center', justifyContent:'center'}, this.props.style]}>
      <TouchableOpacity onPress={this.props.onPress} style={{alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#c71', height:40, width:100, flexDirection:'column'}}>
      	<Text style={{color:'white', fontSize:16}}> {this.props.text}</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
