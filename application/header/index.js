import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
export default class Header extends Component {
	constructor(props) {
		super(props);
	};

  render() {

    return (
      <View style={this.props.style}>
       <Text style={this.props.textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}
