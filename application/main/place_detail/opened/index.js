import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Opened extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened:this.props.opened,
		}

	};
	componentWillReceiveProps(nextProps){
		if(nextProps.opened != this.state.opened){
			this.setState({opened:nextProps.opened})
		}
	}

  render() {
    return (
    	<View>
       		<Text style={this.state.opened?{color:'green'}:{color:'red'}}>{this.state.opened?'Open':'Closed'}</Text>
       </View>
    );
  }
}
