import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button, TouchableHighlight, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import styles from './style';
import DatePicker from 'react-native-date-picker'

const History = ({navigation}) => {

	var headTable = ['STT', 'Thời gian vào', 'Thời gian ra', 'Số tiền\n(VNĐ)'];
	var tableFlexArray = [1, 3, 3, 3]

	var dataTable = getVehicleList();

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


			<View style={styles.filterWrapper}>
				<View style={styles.dateInputContainer}>
					<View style={styles.dateInput}>
						<Text style={styles.dateText}>Từ </Text>
						<Text style={styles.dateText}>04/08/2022</Text>
					</View>
					<View style={styles.dateInput}>
						<Text style={styles.dateText}>Đến </Text>
						<Text style={styles.dateText}>05/08/2022</Text>
					</View>
				</View>
				<TouchableHighlight style={styles.filterButtonContainer}
					onPress={() => {
						alert("Đã lọc")
					}}>
					<Image style={styles.searchIcon} source={require('../../img/lookup.png')} />
				</TouchableHighlight>
			</View>

			<View style={styles.tableWrapper}>

				<Table borderStyle={styles.tableContainer}>
					<Row flexArr={tableFlexArray} data={headTable} style={styles.headTable} textStyle={styles.headTableText} />
				</Table>
				<ScrollView>
					<Table borderStyle={styles.tableContainer}>
						{
							dataTable.map((rowData, index) => (
								<Row
									key={index}
									data={rowData}
									flexArr={tableFlexArray}
									style={[styles.dataTable, index % 2 && { backgroundColor: '#f1f8ff' }]}
									textStyle={styles.dataTableText}
								/>
							))
						}
					</Table>
				</ScrollView>
			</View>
		</View>
	);

	function getVehicleList()
	{
		//call api here
		var _itemList = [
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": " - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
			{
				"plate": "33M - 3699",
				"dateTimeIn": "04/08/2022 - 08:55:24",
				"dateTimeOut": "04/08/2022 - 18:09:13",
				"money": "30000",
			},
			{
				"plate": "29T - 68228",
				"dateTimeIn": "04/08/2022 - 19:30:22",
				"dateTimeOut": "05/08/2022 - 06:03:52",
				"money": "50000",
			},
		]

		var _dataTable = [];
		for (var i in _itemList) {
			var item = _itemList[i];
			_dataTable.push([parseInt(i)+1, item.dateTimeIn, item.dateTimeOut, item.money]);
		}

		return _dataTable;
	}
}
export default History;
