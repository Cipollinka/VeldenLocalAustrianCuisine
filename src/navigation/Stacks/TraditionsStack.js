import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TraditionsScreen from '../../screens/TraditionsScreen';
import TraditionsInfoScreen from '../../screens/TraditionsInfoScreen';

const TraditionsStack = createNativeStackNavigator();

export default function TraditionsStackScreen() {
    return (
        <TraditionsStack.Navigator screenOptions={{ headerShown: false }}>
            <TraditionsStack.Screen name="TraditionsMain" component={TraditionsScreen} />
            <TraditionsStack.Screen name="TraditionsInfo" component={TraditionsInfoScreen} />
        </TraditionsStack.Navigator>
    );
}
