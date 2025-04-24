import React, { useMemo } from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';

export default function SavedLocationsScreen() {
    const places = useSelector((state) => state.places);

    const savedLocations = useMemo(() => {
        const allPlaces = [
            ...places.cafes,
            ...places.restaurants,
            ...places.outdoorDining,
            ...places.bars,
        ];
        return allPlaces.filter(place => place.liked);
    }, [places]);

    return (
        <View
            style={styles.container}
        >
            <Image style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}} source={require('../AppManager/bg.png')} />
            <Header />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>Saved Locations</Text>
                <View style={styles.cardList}>
                    {savedLocations && savedLocations.length > 0 ? (
                        savedLocations.map((place, index) => (
                            <View
                                key={place.id}
                                style={[
                                    styles.cardWrapper,
                                    index !== savedLocations.length - 1 && { marginBottom: 14 },
                                ]}
                            >
                                <PlaceCard place={place} />
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noSavedText}>No saved locations.</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        marginTop: 160,
        paddingBottom: 136,
        marginHorizontal: 36,
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 14,
    },
    noSavedText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
