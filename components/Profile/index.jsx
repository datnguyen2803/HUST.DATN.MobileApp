import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Profile = ({navigation}) => {

	var info = {};
	getInfo();

	return (
		<View style={styles.root}>
			<View style={styles.topWrapper}>
				<TouchableHighlight style={styles.backIconContainer}
					onPress={() => {
						navigation.navigate('Home')
					}}>
					<Image
						source={require("../../img/back_arrow.png")}
						style={styles.backIcon}
					/>
				</TouchableHighlight>
				<Text style={styles.title}>Trang chủ</Text>
			</View>

			<View style={styles.profileImageWrapper}>
				<Image
					source={require("../../img/profile.png")}
					style={styles.profileImage}
				/>
			</View>

			<View style={styles.infoWrapper}>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>Họ và tên: {info.fullname}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>SĐT: {info.phone}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>Biển số xe: {info.plate}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>Số dư: {info.balance} VNĐ</Text>
				</View>

			</View>

			<View style={styles.bottomWrapper}>
				<TouchableHighlight style={styles.button}
					onPress={() => {
						alert("Cập nhật")
					}}>
					<Text style={styles.buttonText}>Cập nhật</Text>
				</TouchableHighlight>

				<TouchableHighlight style={styles.button}
					onPress={() => {
						navigation.navigate('Pay')
					}}>
					<Text style={styles.buttonText}>Nạp tiền</Text>
				</TouchableHighlight>
			</View>
		</View>
	);

	//call API here
	function getInfo()
	{
		info["fullname"] = "Nguyễn Tiến Đạt"
		info["phone"] = "0352004870"
		info["plate"] = "33M-3699"
		info["balance"] = 100000
	}
}
export default Profile;
