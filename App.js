import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Pay from './components/Pay';
import History from './components/History';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		// <Login name = "Đạt" />
		//<History />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
				<Stack.Screen name="Signup" component={Signup} options={{ header: () => null }} />
				<Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
				<Stack.Screen name="Profile" component={Profile} options={{ header: () => null }} />
				<Stack.Screen name="Pay" component={Pay} options={{ header: () => null }} />
				<Stack.Screen name="History" component={History} options={{ header: () => null }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App
