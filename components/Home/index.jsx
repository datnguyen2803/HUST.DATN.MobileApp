import React, { useState } from 'react';
import { TouchableHighlight, Text, View, Image } from 'react-native';
import styles from './style';

const Home = (props) => {
	const OPTIONS = { PAY_OPTION: 0, PROFILE_OPTION: 1, HISTORY_OPTION: 2, HOME_OPTION: 3 };
	const [option, setOption] = useState(OPTIONS.HOME_OPTION);
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image
					source={require("../../img/icon.png")}
					style={styles.icon}
				/>
			</View>

			<View style={styles.top}>
				<Text style={styles.welcome}>Chào Đạt, </Text>
				<View style={styles.walletBar}>
					<Image source={require('./img/wallet.png')} style={styles.walletIcon} />
					<Text style={styles.walletText}>100.000 VNĐ</Text>
				</View>
			</View>

			<View style={styles.middleWrapper} >
				<Image style={styles.middleContainer} source= {require("./img/middle.png")} resizeMethod='resize' />
			</View>

			<View style={styles.bottom}>
				<View style={styles.optionContainer}>
					<TouchableHighlight
						onPress={() => {
							alert("Đang tới mục Nạp tiền...")
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/pay.png')} />
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => {
							alert("Đang tới mục Thông tin cá nhân...")
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/profile.png')} />
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => {
							alert("Đang tới mục Tra cứu lịch sử...")
						}}
					>
						<Image style={styles.optionIcon} source={require('../../img/lookup.png')} />
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
};

export default Home
