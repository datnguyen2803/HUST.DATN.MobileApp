import React, { useState } from 'react';
import { TouchableHighlight, Text, View, Image } from 'react-native';
import styles from './style';

const Home = ({navigation}) => {
	var info = {};

	getInfo();
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image
					source={require("../../img/icon.png")}
					style={styles.icon}
				/>
			</View>

			<View style={styles.top}>
				<Text style={styles.welcome}>Chào {info.name}, </Text>
				<View style={styles.walletBar}>
					<Image source={require('./img/wallet.png')} style={styles.walletIcon} />
					<Text style={styles.walletText}>{info.balance} VNĐ</Text>
				</View>
			</View>

			<View style={styles.middleWrapper} >
				<Image style={styles.middleContainer} source= {require("./img/middle.png")} resizeMethod='resize' />
			</View>

			<View style={styles.bottom}>
				<View style={styles.optionContainer}>
					<TouchableHighlight
						onPress={() => {
							navigation.navigate('Pay')
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/pay.png')} />
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => {
							navigation.navigate('Profile')
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/profile.png')} />
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => {
							navigation.navigate('History')
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/lookup.png')} />
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);

	function getInfo()
	{
		//call api here
		//fetch('getInfoUrl');
		info["name"] = "Đạt";
		info["balance"] = 100000;
	}

};

export default Home
