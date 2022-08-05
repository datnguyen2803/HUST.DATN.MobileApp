import { StyleSheet } from 'react-native'

const wrapperMarginVertical = 10;
const wrapperPaddingHorizontal = 15;
const wrapperPaddingVertical = 15;
const containerMarginVertical = 5;
const inputPaddingHorizontal = 10;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingVertical: 50,
		paddingHorizontal: 20,
		backgroundColor: '#FFFACD'
	},
	topWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	backIconContainer: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	backIcon: {
		width: 50,
		height: 50
	},
	title: {
		justifyContent: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
	mainIconWrapper: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainIconContainer: {
		width: 150,
		height: 150,
	},
	infoWrapper: {
		flex: 6,
		marginVertical: wrapperMarginVertical,
		paddingHorizontal: wrapperPaddingHorizontal,
		paddingVertical: wrapperPaddingVertical,
		
		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'lightgrey',
		borderWidth: 2
	},
	infoContainer: {
		marginVertical: containerMarginVertical,
	},
	inputMoneyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: containerMarginVertical,
	},
	inputMoney: {
		height: 50,
		width: 250,
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: inputPaddingHorizontal,
	},
	inputPasswordContainer: {
		height: 50,
		width: 350,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: inputPaddingHorizontal,
		marginVertical: containerMarginVertical,
	},
	bottomWrapper: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: wrapperMarginVertical,
		alignItems: 'center',
		justifyContent: 'space-around',

		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'lightgrey',
		borderWidth: 2,

	},
	buttonContainer: {
		width: 150,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: '#2196F3',
		borderRadius: 10,


	},
	buttonText: {
		color: '#fff',
		fontSize: 17,
	},
});

export default styles;
