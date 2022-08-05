import React from 'react';
import {View, TouchableHighlight, Button, StyleSheet, Image, ScrollView, Text } from 'react-native';


const Tabside = () => (
	<ScrollView>
		<View style = {styles.containerTop} >
			<TouchableHighlight style={styles.container}
				onPress={() => {
					console.log("home pressed");
				}}>
				<Image source={require('../img/home.jpg')} style={styles.imageStyle} />
			</TouchableHighlight>
		</View>

		<View style = {styles.containerCenter}> 
			<TouchableHighlight style={styles.container}
				onPress={() => {
					console.log("look up pressed");
				}}>
				<Image source={require('../img/lookup.jpg')} style={styles.imageStyle} />
			</TouchableHighlight>
		</View>

		<View style = {styles.containerBottom}>
			<TouchableHighlight style={styles.container}
				onPress={() => {
					console.log("map pressed");
				}}>
				<Image source={require('../img/map.jpg')} style={styles.imageStyle} />
			</TouchableHighlight>
		</View>

	</ScrollView>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
		//marginLeft: 20,
		width: 65
	},
	containerTop: {
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: "red"
	},
	containerCenter: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: "green"
	},
	containerBottom: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: "blue"
	},
	imageStyle: {
		borderColor: "lightgray",
		borderWidth: 2,
		width: 64,
		height: 64
	}

});

export default Tabside;
