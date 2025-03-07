import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import MapSVG from '../assets/navbar/MapSVG';
import CompasSVG from '../assets/navbar/CompasSVG';
import BookSVG from '../assets/navbar/BookSVG';

export default function TabBar({ state, navigation }) {
    const visibleRoutes = state.routes.filter(
        route => route.name !== 'SavedLocations' && route.name !== 'About'
    );

    return (
        <View style={styles.outerContainer}>
            <SafeAreaView edges={['bottom']} style={styles.safeArea}>
                <View style={styles.innerContainer}>
                    <View style={styles.navContainer}>
                        {visibleRoutes.map((route, index) => {
                            const isFocused = state.index === state.routes.findIndex(r => r.key === route.key);

                            const onPress = () => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                });
                                if (!event.defaultPrevented) {
                                    navigation.navigate(route.name);
                                }
                            };

                            let IconComponent = MapSVG;
                            if (route.name === 'Explore') {
                                IconComponent = CompasSVG;
                            } else if (route.name === 'Traditions') {
                                IconComponent = BookSVG;
                            }

                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={onPress}
                                    style={[styles.iconButton, index !== 0 && { marginLeft: 16 }]}
                                >
                                    {isFocused && (
                                        <LinearGradient
                                            colors={['#B0996C', '#4A402D']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            style={[StyleSheet.absoluteFill, { borderRadius: 8 }]}
                                        />
                                    )}
                                    <IconComponent />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        position: 'absolute',
        bottom: 24,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    safeArea: {
        backgroundColor: 'transparent',
    },
    innerContainer: {
        width: 214,
        backgroundColor: '#232D30',
        borderColor: '#B0996C',
        borderWidth: 1,
        height: 60,
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22,
        height: '100%',
    },
    iconButton: {
        width: 46,
        height: 46,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#B0996C',
        backgroundColor: '#273336',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
    },
});
