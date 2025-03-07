import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import PlaceCard from '../PlaceCard';
import { getRandomPlace } from '../../store/slices/placesSlice';

const ExploreCard = ({ category, onSearchNew }) => {
    const dispatch = useDispatch();
    const currentPlace = useSelector(state => state.places.currentPlace[category]);

    useEffect(() => {
        dispatch(getRandomPlace({ category, previousId: currentPlace?.id }));
    }, [dispatch, category, currentPlace?.id]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/explore/BgImage.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />

            <Header />

            <View style={styles.bottomBlock}>
                <Text style={styles.title}>Found Place</Text>
                {currentPlace && <PlaceCard place={currentPlace} />}
                <TouchableOpacity
                    style={styles.exploreButton}
                    onPress={() => onSearchNew()}
                >
                    <LinearGradient
                        colors={['#BA9F6A', '#B0996C', '#4A402D']}
                        style={styles.exploreButtonGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.exploreButtonText}>Search new</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    bgImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    bottomBlock: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 664,
        backgroundColor: '#273336',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        borderWidth: 2,
        borderColor: 'transparent',
        borderTopColor: '#B0996C',
        overflow: 'hidden',
        paddingTop: 26,
        paddingHorizontal: 32,
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 18,
        textAlign: 'center',
    },
    exploreButton: {
        marginTop: 14,
    },
    exploreButtonGradient: {
        height: 66,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 22,
        elevation: 4,
    },
    exploreButtonText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export default ExploreCard;
