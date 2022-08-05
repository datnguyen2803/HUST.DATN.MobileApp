import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Login = (props) => {
	const [login, setLogin] = useState(false);
	const [signUp, setSignUp] = useState(false);
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
					/>
				</View>
				<View style={styles.inputBar}>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						placeholder="Mật khẩu"
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
						alert("Đăng nhập thành công")
					}}>
					<Text style={styles.loginText}>Đăng nhập</Text>
				</TouchableHighlight>
				<View style={styles.signUp}>
					<Text>Chưa có tài khoản? </Text>
					<TouchableHighlight
						onPress={() => {
							alert("Đăng ký thành công")
						}}>
						<Text style={styles.signUpText}>Đăng ký</Text>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
export default Login;
