import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ScrollView } from 'react-native';


export default class Place extends Component {
	constructor(props) {
		super(props);
	};
  render() {

    return (
       <View style={this.props.style}>
       	<Text style={this.props.textStyle}>{this.props.name}</Text>
       <Text>{JSON.stringify(this.props.object)}</Text>
       </View>
    );
  }
}
