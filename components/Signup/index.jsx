import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Signup = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	return (

		<View style={styles.container}>
			<TouchableHighlight style={styles.backIconContainer}
				onPress={() => {
					navigation.navigate('Login')
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
						onChangeText={newText => setUserName(newText)}
						defaultValue={userName.toString()}
					/>
				</View>
				<View style={styles.inputBar}>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						placeholder="Mật khẩu"
						onChangeText={newText => setPassword(newText)}
						defaultValue={password.toString()}
					/>
				</View>
				<View style={styles.inputBar}>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						placeholder="Nhập lại mật khẩu"
						onChangeText={newText => setRePassword(newText)}
						defaultValue={rePassword.toString()}
					/>
				</View>

				<View style={styles.butContainer}>
					<TouchableHighlight
						style={styles.signUpBut}
						onPress={() => {
							checkSignUp();
						}}>
						<Text style={styles.signUpText}>Xác nhận</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.cancelBut}
						onPress={() => {
							navigation.navigate('Login')
						}}>
						<Text style={styles.cancelText}>Hủy</Text>
					</TouchableHighlight>
				</View>

			</View>
		</View>
	);

	function checkSignUp() {
		var noti = "";
		console.log(password); console.log(rePassword); console.log(userName);
		if (rePassword != password) {
			alert("Hai mật khẩu không giống nhau\nVui lòng nhập lại");
			setPassword(""); setRePassword("");
			return;
		}
		//write api here
		// fetch('signupUrl', {
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		uname: userName,
		// 		upass: password
		// 	})
		// });
		noti = "Đăng ký thành công cho tài khoản " + userName.toString() + "\nVui lòng đăng nhập để sử dụng";
		alert(noti);
		setUserName(""); setPassword(""); setRePassword("");
		navigation.navigate('Login');
	}
}
export default Signup;
