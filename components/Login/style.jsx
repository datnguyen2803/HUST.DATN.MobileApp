import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		backgroundColor: '#FFFACD'
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

		borderColor: 'gray',
		borderWidth: 1
	},
	loginBut: {
		width: 380,
		height: 50,
		marginTop: 30,
		backgroundColor: '#0165ff',
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: 'bold'
	},
	signUp: {
		paddingTop: 30,
		flexDirection: 'row',
		alignSelf: 'flex-end'
	},
	signUpText: {
		color: "#7f9cc6",
		fontSize: 15,
		fontWeight: 'bold',
	}

});

export default styles;
