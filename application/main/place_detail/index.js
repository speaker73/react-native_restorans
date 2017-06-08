import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';
import Button from '../../button';

export default class Place extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open:this.props.open,
			initialPosition:false
		}

	};
	componentWillReceiveProps(nextProps){
		if(nextProps.open != this.state.open){
			this.setState({open:nextProps.open})
		}
		
	}

  render() {

    return (
       <TouchableOpacity  onPress={()=>{
       		this.props.toggle();
       		this.setState({open:!this.state.open})
       	}} 
       	style={this.props.style}>
       	<Text  style={this.props.textStyle}>{this.props.name || JSON.stringify(this.props.object)} </Text>
       	<Text>open:{JSON.stringify(this.state.open)}</Text>
       	<Button
       		style={{alignItems:'flex-end'}}
       		text="Let's Go"
       		onPress={()=>{
       			const location = this.props.object.geometry.location;

       			Linking.openURL(`geo:${location.lat}, ${location.lng}`)
       		}}
       	/>
       	<Text>{this.props.object.vicinity}</Text>
       {this.state.open && (<Text>{JSON.stringify(this.props.object)}</Text>) }
       </TouchableOpacity>
    );
  }
}
