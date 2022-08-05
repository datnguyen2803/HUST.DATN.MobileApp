import { StyleSheet } from 'react-native'

const wrapperMarginVertical = 10;
const wrapperPaddingHorizontal = 15;
const wrapperPaddingVertical = 15;
const containerMarginVertical = 5;
const containerPaddingVertical = 10;
const containerPaddingHorizontal = 10;
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
	// mainIconWrapper: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// mainIconContainer: {
	// 	width: 100,
	// 	height: 100,
	// },
	filterWrapper: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: wrapperMarginVertical,
		paddingHorizontal: wrapperPaddingHorizontal,
		paddingVertical: wrapperPaddingVertical,
		
		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'lightgrey',
		borderWidth: 2
	},
	dateInputContainer: {
		flex: 4,
		justifyContent: 'space-between'
	},
	dateInput: {
		flexDirection: 'row',
	},
	dateText: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	filterButtonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E8E9EB',
		borderRadius: 10,
	},
	searchIcon: {
		width: 50,
		height: 50
	},
	tableWrapper: {
		flex: 8,
		marginVertical: wrapperMarginVertical,
		// paddingHorizontal: wrapperPaddingHorizontal,
		// paddingVertical: wrapperPaddingVertical,

		backgroundColor: '#fff',
		// borderRadius: 10,
		// borderColor: 'lightgrey',
		// borderWidth: 2
	},
	tableContainer: {
		borderWidth: 1, 
		borderColor: '#000',
		borderRadius: 10,
		
	},
	headTable: {
		height: 60, 
		backgroundColor: '#B3CDE0',

	},
	headTableText: {
		fontSize: 12,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	dataTable: {
		height: 40, 
	},
	dataTableText: {
		fontSize: 10,
		alignSelf: 'center'
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
