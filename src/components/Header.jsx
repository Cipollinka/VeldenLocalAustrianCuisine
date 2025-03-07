import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LikeSVG from '../assets/header/LikeSVG';
import InfoSVG from '../assets/header/InfoSVG';
import ActiveLikeSVG from '../assets/icons/ActiveLikeSVG';
import InfoActiveSVG from '../assets/icons/InfoActiveSVG';

export default function Header() {
    const navigation = useNavigation();
    const route = useRoute();

    const isSavedLocations = route.name === 'SavedLocations';
    const isAbout = route.name === 'About';

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.iconBox}
                onPress={() => navigation.navigate('MainTabs', { screen: 'SavedLocations' })}
            >
                {isSavedLocations ? <ActiveLikeSVG /> : <LikeSVG />}
            </TouchableOpacity>
            <Image
                source={require('../assets/header/HeaderLogo.png')}
                style={styles.logo}
            />
            <TouchableOpacity
                style={styles.iconBox}
                onPress={() => navigation.navigate('MainTabs', { screen: 'About' })}
            >
                {isAbout ? <InfoActiveSVG /> : <InfoSVG />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 142,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 32,
        backgroundColor: '#273336',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
        paddingBottom: 16,
        paddingTop: 58,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 22,
        elevation: 4,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    iconBox: {
        width: 46,
        height: 46,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#B0996C',
        backgroundColor: '#232C30',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
    },
    logo: {
        width: 189,
        height: 68,
        resizeMode: 'contain',
    },
});
