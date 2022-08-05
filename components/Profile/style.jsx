import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

	root: {
		flex: 1,
		paddingTop: 50,
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
	profileImageWrapper: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileImage: {
		width: 150,
		height: 150
	},
	infoWrapper: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		flex: 6,
		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'lightgrey',
		borderWidth: 2
	},
	infoContainer: {
		flex: 1,
		marginVertical: 20,
		paddingLeft: 10,
		justifyContent: 'center',

		backgroundColor: '#B3CDE0',
		borderRadius: 10,
		// borderColor: 'lightgrey',
		// borderWidth: 2,
		
	},
	info: {
		fontSize: 20
	},
	bottomWrapper: {
		flex: 1,
		marginTop: 10,
		marginBottom: 10,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'lightgrey',
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	button: {
		backgroundColor: '#2196F3',
		width: 150,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 17,
	}

});

export default styles;
