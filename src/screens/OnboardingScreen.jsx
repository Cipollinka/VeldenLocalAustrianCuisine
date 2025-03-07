import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MountainSVG from '../assets/onboarding/MountainSVG';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
    const { screens } = useSelector((state) => state.onboarding);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentScreen = screens[currentIndex];

    const handleNext = async () => {
        if (currentIndex < screens.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            navigation.replace('MainTabs', { screen: 'Explore' });
        }
    };

    return (
        <View style={styles.container}>
            <Image source={currentScreen.image} style={styles.backgroundImage} />
            <Image
                source={require('../assets/onboarding/Velden.png')}
                style={styles.logo}
            />
            <View style={styles.bottomContainer}>
                <MountainSVG style={styles.mountainIcon} />
                <Text style={styles.title}>{currentScreen.title}</Text>
                <Text style={styles.subtitle}>{currentScreen.text}</Text>
                {currentScreen.buttonLabel && (
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={handleNext}
                    >
                        <LinearGradient
                            colors={['#BA9F6A', '#B0996C', '#4A402D']}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 1.0, y: 0.5 }}
                            style={styles.buttonGradient}
                        >
                            <Text style={styles.buttonText}>
                                {currentScreen.buttonLabel}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273336',
        width,
        height,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        opacity: 0.2,
    },
    logo: {
        position: 'absolute',
        width: 286,
        height: 196,
        top: 141,
        left: (width - 286) / 2,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 448,
        backgroundColor: '#273336',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        borderWidth: 2,
        borderColor: 'transparent',
        borderTopColor: '#B0996C',
        overflow: 'hidden',
        paddingHorizontal: 12,
        paddingTop: 26,
        alignItems: 'center',
    },
    mountainIcon: {
        marginBottom: 22,
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 18,
        width: 326,
        flexWrap: 'wrap',
    },
    subtitle: {
        fontFamily: 'Nunito Sans',
        fontSize: 16,
        fontWeight: '400',
        color: '#B8B8B8',
        textAlign: 'center',
        marginBottom: 36,
        paddingHorizontal: 20,
        width: 326,
        lineHeight: 22,
    },
    buttonWrapper: {
        width: 326,
        marginBottom: 20,
    },
    buttonGradient: {
        height: 66,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 22,
        elevation: 4,
    },
    buttonText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
