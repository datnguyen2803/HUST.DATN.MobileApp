import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import styles from './style';

const Pay = ({ navigation }) => {
	const TRUE_PASSWORD = "123";

	const [currentBalance, setCurrentBalance] = useState(() => getCurrentBalance());
	const [moreBalance, setMoreBalance] = useState(0);
	const [expectBalance, setExpectBalance] = useState(currentBalance + moreBalance);
	const [password, setPassword] = useState("");
	getCurrentBalance();

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

			<View style={styles.mainIconWrapper}>
				<Image
					source={require("../../img/pay.png")}
					style={styles.mainIconContainer}
				/>
			</View>

			<View style={styles.infoWrapper}>
				<Text style={styles.infoContainer}>Số dư hiện tại: {currentBalance} VNĐ</Text>
				<View style={styles.inputMoneyContainer}>
					<Text style={styles.infoContainer}>Nạp thêm: </Text>
					<TextInput
						style={styles.inputMoney}
						placeholder="Số tiền nạp"
						keyboardType='number-pad'
						onChangeText={newText => { 
							setMoreBalance(parseInt(newText));
							console.log(currentBalance); console.log(moreBalance);
							setExpectBalance(currentBalance + moreBalance)
						}}
						defaultValue={moreBalance === 0 || moreBalance.toString() === NaN ? "" : moreBalance.toString()}
					/>
				</View>
				<Text style={styles.infoContainer}>Tạm tính sau nạp: {expectBalance}</Text>
				<TextInput
					style={styles.inputPasswordContainer}
					placeholder="Xác nhận mật khẩu"
					onChangeText={(newText) => { 
						setPassword(newText);
					}}
					defaultValue={password}
				/>
			</View>

			<View style={styles.bottomWrapper}>
				<TouchableHighlight style={styles.buttonContainer}
					onPress={() => {
						navigation.navigate('Home')
					}}>
					<Text style={styles.buttonText}>Quay lại</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonContainer}
					onPress={() => {
						checkPay();
					}}>
					<Text style={styles.buttonText}>Xác nhận</Text>
				</TouchableHighlight>
			</View>
		</View>
	);

	//call API here
	function getCurrentBalance() {
		//setCurrentBalance(100000);
		//setExpectBalance(currentBalance + moreBalance);
		return 100000;
	}

	function checkPay()
	{
		console.log(moreBalance)
		if(moreBalance == 0)
		{
			alert("Vui lòng nhập số tiền nạp");
			return 0;
		}
		if(password != TRUE_PASSWORD)
		{
			alert("Sai mật khẩu!!!");
			setPassword("")
			return 0;
		}
		var noti = "Nạp thành công " + moreBalance + "VNĐ";
		alert(noti);
		//call API here
		setCurrentBalance(expectBalance);
		return 1;
	}
}
export default Pay;
