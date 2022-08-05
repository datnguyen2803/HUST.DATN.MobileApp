import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Signup = (props) => {
	const [login, setLogin] = useState(false);
	const [signUp, setSignUp] = useState(false);
	return (

		<View style={styles.container}>
					<TouchableHighlight style={styles.backIconContainer}
					onPress={() => {
						alert("Quay lại")
					}}>
					<Image
					source={require("../../img/back_arrow.png")}
					style={styles.backIcon}
				/>
				</TouchableHighlight>
			<View style={styles.iconContainer}>
				<Image
					source={require("../../img/icon.png")}
					style={styles.icon}
				/>
			</View>


			<Text style={styles.title}>Đăng ký</Text>


			<View style={styles.inputContainer}>
				<View style={styles.inputBar}>
					<TextInput
						style={styles.input}
						placeholder="Tên đăng nhập"
					/>
				</View>
				<View style={styles.inputBar}>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						placeholder="Mật khẩu"
					/>
				</View>
				<View style={styles.inputBar}>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						placeholder="Nhập lại mật khẩu"
					/>
				</View>

				<View style = {styles.butContainer}>
				<TouchableHighlight
					style={styles.signUpBut}
					onPress={() => {
						alert("Đăng ký hoàn tất")
					}}>
					<Text style={styles.signUpText}>Xác nhận</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.cancelBut}
					onPress={() => {
						alert("Quay lại")
					}}>
					<Text style={styles.cancelText}>Hủy</Text>
				</TouchableHighlight>
				</View>

			</View>
		</View>
	);
}
export default Signup;
