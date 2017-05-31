import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
export default class Footer extends Component {
	constructor(props) {
		super(props);
		
	};

  render() {

    return (
      <View style={this.props.style}>
      	<Text style={this.props.styleText}>{this.props.text}</Text>
      </View>
    );
  }
}
