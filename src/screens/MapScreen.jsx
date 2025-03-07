import React, { useMemo, useState, useRef } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import MountainSVG from '../assets/onboarding/MountainSVG';
import Header from '../components/Header';
import { getBoundingRegion } from '../helpers/getBoundingRegion';
import PlaceCard from '../components/PlaceCard';

export default function MapScreen() {
    const places = useSelector((state) => state.places);

    const allPlaces = useMemo(() => {
        const addCategory = (placesArr, category) =>
            placesArr.map(place => ({ ...place, category }));
        return [
            ...addCategory(places.cafes, 'cafes'),
            ...addCategory(places.restaurants, 'restaurants'),
            ...addCategory(places.outdoorDining, 'outdoorDining'),
            ...addCategory(places.bars, 'bars'),
        ];
    }, [places]);

    const initialRegion = useMemo(() => getBoundingRegion(allPlaces), [allPlaces]);

    const [selectedPlaceInfo, setSelectedPlaceInfo] = useState(null);

    const handleMarkerPress = (place) => {
        setSelectedPlaceInfo({ id: place.id, category: place.category });
    };

    const selectedPlace = useSelector((state) => {
        if (!selectedPlaceInfo) {return null;}
        return state.places[selectedPlaceInfo.category].find(
            (item) => item.id === selectedPlaceInfo.id
        );
    });

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return Math.abs(gestureState.dy) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy > 20) {
                    setSelectedPlaceInfo(null);
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <Header />

            <MapView
                style={styles.map}
                initialRegion={initialRegion}
                showsUserLocation={true}
                userInterfaceStyle="dark"
                onPress={() => setSelectedPlaceInfo(null)}
            >
                {allPlaces.map((place) => (
                    <Marker
                        key={place.id}
                        coordinate={place.coordinates}
                        onPress={(e) => {
                            e.stopPropagation();
                            handleMarkerPress(place);
                        }}
                    />
                ))}
            </MapView>

            <View style={[styles.bottomBlock, { height: selectedPlace ? 576 : 218 }]}>
                <View {...panResponder.panHandlers}>
                    <MountainSVG style={styles.mountain} />
                </View>

                {selectedPlace && (
                    <View style={styles.cardContainer}>
                        <PlaceCard
                            place={selectedPlace}
                            category={selectedPlace.category}
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    cardContainer: {
        marginTop: 26,
        marginHorizontal: 36,
    },
    bottomBlock: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#273336',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        borderWidth: 2,
        borderColor: 'transparent',
        borderTopColor: '#B0996C',
        overflow: 'hidden',
        paddingHorizontal: 12,
        paddingTop: 26,
    },
    mountain: {
        alignSelf: 'center',
    },
});
