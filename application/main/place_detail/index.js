import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image} from 'react-native';
import Button from '../../button';
import Opened from './opened';
const GOOGLE_API_KEY = 'AIzaSyAFZ8xYjGLiOs-2s7uM0LhPtH4ii_10Q8U';
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
	renderProps(){
		if((this.props.name != 'Loading...') ){
			return (
				<View>
					{this.props.object.opening_hours&&<Opened opened={this.props.object.opening_hours.open_now}/>}
					<Text>Location: {this.props.object.vicinity}</Text>
       				<Text>Rating: {this.props.object.rating}</Text>
       				<Text>Types: {this.props.object.types.join(', ')}</Text>
				</View>
			)
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
       	<View style={{flexDirection:'row', borderBottomWidth:1, paddingBottom:10}}>
       		<View style={{flex:1}}> 
	       		
	       		{this.renderProps()}
       		</View>
       		{this.props.object.icon&&(<View style={{ flexDirection:'column', justifyContent:'space-around'}}>
	       		<View style={{flex:1,alignItems:'flex-end'}}>
					<Image
			       		 	style={{width: 50, height: 50, marginBottom:10}}
			       			source={{uri: this.props.object.icon}}
			       		/>
			       {this.props.object.photos&&(<Image
			       		 	style={{width:100, height:100,  marginBottom:10}}
			       			source={{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.object.photos[0].photo_reference}&key=${GOOGLE_API_KEY}`}}
			       		/>
			       	)}	
		       	</View>      		
	       		<Button
	       			style={{alignItems:'flex-end'}}
		       		text="Let's Go"
		       		onPress={()=>{
		       			const location = this.props.object.geometry.location;

		       			Linking.openURL(`geo:${location.lat}, ${location.lng}`)
		       		}}
		       	/>
	       	</View>)}	
       	</View>
       		
       {this.state.open && (<Text>{JSON.stringify(this.props.object)}</Text>) }
       </TouchableOpacity>
    );
  }
}
