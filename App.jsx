/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';

import ExploreScreen from './src/screens/ExploreScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import TabBar from './src/navigation/TabBar';
import MapScreen from './src/screens/MapScreen';
import SavedLocationsScreen from './src/screens/SavedLocationsScreen';
import AboutScreen from './src/screens/AboutScreen';
import TraditionsScreen from './src/screens/TraditionsScreen';
import TraditionsInfoScreen from './src/screens/TraditionsInfoScreen';
import TraditionsStackScreen from './src/navigation/Stacks/TraditionsStack';

import { store, persistor } from './src/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Explore"
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Traditions" component={TraditionsStackScreen} />

            <Tab.Screen
                name="SavedLocations"
                component={SavedLocationsScreen}
                options={{ tabBarButton: () => null }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{ tabBarButton: () => null }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
                if (hasSeenOnboarding === null) {
                    setIsFirstLaunch(true);
                } else {
                    setIsFirstLaunch(false);
                }
            } catch (e) {
                console.error(e);
                setIsFirstLaunch(false);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    if (!appIsReady || isFirstLaunch === null) {
        return null;
    }

    const initialRouteName = isFirstLaunch ? 'Onboarding' : 'MainTabs';

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
                        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                        <Stack.Screen name="Explore" component={ExploreScreen} />
                        <Stack.Screen name="Traditions" component={TraditionsScreen} />
                        <Stack.Screen name="TraditionsInfo" component={TraditionsInfoScreen} />
                        <Stack.Screen name="SavedLocations" component={SavedLocationsScreen} />
                        <Stack.Screen name="About" component={AboutScreen} />
                        <Stack.Screen name="MainTabs" component={MainTabs} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
