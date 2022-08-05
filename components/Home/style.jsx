import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		backgroundColor: '#FFFACD'
	},
	iconContainer: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	}, 
	icon: {
		width: 50,
		height: 50
	},
	top: {
		flex: 4,
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderRadius: 10,
		borderWidth: 1,
	},
	welcome: {
		paddingLeft: 10,
		fontSize: 30
	},
	walletBar: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center'
	},
	walletIcon: {
		width: 100,
		height: 100
	},
	walletText: {
		fontSize: 30
	},

	middleWrapper: {
		flex: 10,
		marginVertical: 20,
		backgroundColor: '#c0c5ce',
		borderRadius: 10
	},
	middleContainer: {
		height: '100%',
		width: '100%',
	},

	bottom: {
		flex: 2,
		marginBottom: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
		borderWidth: 1,
	},
	optionContainer: {
		justifyContent: 'space-around',
		paddingVertical: 5,
		flexDirection: 'row'
	},
	optionIcon: {
		width: 80,
		height: 80
	}
});

export default styles;
