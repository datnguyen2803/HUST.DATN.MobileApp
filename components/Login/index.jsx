import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Login = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return (

		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image
					source={require("../../img/icon.png")}
					style={styles.icon}
				/>
			</View>


			<Text style={styles.title}>Đăng nhập</Text>


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

				<View style={styles.signUp}>
					<TouchableHighlight
						onPress={() => {
							alert("Đang lấy mật khẩu...")
						}}>
						<Text style={styles.signUpText}>Quên mật khẩu</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight
					style={styles.loginBut}
					onPress={() => {
						var test = checkLogin();
						if (test == 1) {
							navigation.navigate('Home')
						}

					}}>
					<Text style={styles.loginText}>Đăng nhập</Text>
				</TouchableHighlight>
				<View style={styles.signUp}>
					<Text>Chưa có tài khoản? </Text>
					<TouchableHighlight
						onPress={() => {
							navigation.navigate('Signup')
						}}>
						<Text style={styles.signUpText}>Đăng ký</Text>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);

	function checkLogin() {
		return 1;
		if (userName == "") {
			alert("Vui lòng điền tên đăng nhập");
			return 0;
		}
		if (password == "") {
			alert("Bạn chưa điền mật khẩu");
			return 0;
		}

		//write api here
		//var loginurl = 'https://mywebsite.com/endpoint/' + userName + '/' + password;
		//fetch(loginurl);
		if (userName == "admin" && password == "admin") {
			setUserName("");
			setPassword("");
			return 1;
		}
		else {
			alert("Sai tên đăng nhập hoặc mật khẩu\nVui lòng nhập lại");
			return 0;
		}

	};


}
export default Login;
