import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		backgroundColor: '#FFFACD'
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
	iconContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 150,
		height: 150
	},
	title: {
		paddingTop: 30,
		fontSize: 30,
		fontWeight: 'bold',
		paddingTop: 30,
	},
	inputContainer: {
		flex: 3
	},
	inputBar: {
		paddingTop: 30,
		flexDirection: "row",
		alignItems: 'center'
	},
	input: {
		height: 50,
		width: 380,
		borderRadius: 10,
		paddingHorizontal: 10,
		borderColor: 'gray',
		borderWidth: 1
	},
	butContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	signUpBut: {
		width: 180,
		height: 50,
		marginTop: 30,
		backgroundColor: '#0165ff',
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	signUpText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: 'bold'
	},
	cancelBut: {
		width: 180,
		height: 50,
		marginTop: 30,
		backgroundColor: '#f1f6f7',
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cancelText: {
		color: "#182944",
		fontSize: 20,
		fontWeight: 'bold'
	},

});

export default styles;
