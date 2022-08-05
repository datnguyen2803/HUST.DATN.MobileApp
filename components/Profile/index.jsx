import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Profile = (props) => {

	return (
		<View style={styles.root}>
			<View style={styles.topWrapper}>
				<TouchableHighlight style={styles.backIconContainer}
					onPress={() => {
						alert("Quay lại")
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
					<Text style={styles.info}>Họ và tên: Nguyễn Tiến Đạt</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>SĐT: 0352004870</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>Biển số xe: 33M-3699</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}>Số dư: 100.000 VNĐ</Text>
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
						alert("Nạp tiền")
					}}>
					<Text style={styles.buttonText}>Nạp tiền</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}
export default Profile;
