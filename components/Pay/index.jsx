import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Pay = (props) => {

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

			<View style={styles.mainIconWrapper}>
				<Image
					source={require("../../img/pay.png")}
					style={styles.mainIconContainer}
				/>
			</View>

			<View style={styles.infoWrapper}>
				<Text style={styles.infoContainer}>Số dư hiện tại: 100.000 VNĐ</Text>
				<View style={styles.inputMoneyContainer}>
					<Text style={styles.infoContainer}>Nạp thêm: </Text>
					<TextInput
						style={styles.inputMoney}
						placeholder="Số tiền nạp"
					/>
				</View>
				<Text style={styles.infoContainer}>Tạm tính sau nạp: </Text>
				<TextInput
					style={styles.inputPasswordContainer}
					placeholder="Xác nhận mật khẩu"
				/>
			</View>

			<View style={styles.bottomWrapper}>
				<TouchableHighlight style={styles.buttonContainer}
					onPress={() => {
						alert("Quay lại")
					}}>
					<Text style={styles.buttonText}>Quay lại</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonContainer}
					onPress={() => {
						alert("Xác nhận")
					}}>
					<Text style={styles.buttonText}>Xác nhận</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}
export default Pay;
