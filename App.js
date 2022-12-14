import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import topicReducer from "./store/reducers/topicReducer";
import WeeklyAvailability from './screens/WeeklyAvailability';
import ChooseDays from './screens/ChooseDays';

export default function App() {
    const Stack = createStackNavigator();

    const store = createStore(topicReducer);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="My Workout Planner" component={HomeScreen}/>
                    <Stack.Screen name="Weekly Availability" component={WeeklyAvailability}/>
                    <Stack.Screen name="Choose Days" component={ChooseDays}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}