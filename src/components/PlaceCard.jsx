import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LikeSVG from '../assets/header/LikeSVG';
import ShareSVG from '../assets/icons/ShareSVG';
import { useShare } from '../hooks/useShare';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../store/slices/placesSlice';
import ActiveLikeSVG from '../assets/icons/ActiveLikeSVG';
import { useOpenMap } from '../hooks/useOpenMap';

const PlaceCard = ({ place, category }) => {
    const dispatch = useDispatch();
    const { shareContent } = useShare();
    const { openMap } = useOpenMap();

    const handleShare = () => {
        shareContent(place.description);
    };

    const handleLike = () => {
        dispatch(toggleLike({ category, id: place.id }));
    };

    const handleOpenLocation = () => {
        openMap(place.coordinates.latitude, place.coordinates.longitude, place.name);
    };

    return (
        <View style={styles.card}>
            <Image source={place.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.foundPlaceText}>{place.name}</Text>
                <Text style={styles.ratingText}>Rating: ★★★★☆ {place.rating}</Text>
                <Text style={styles.descriptionText}>{place.description}</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={handleOpenLocation} style={styles.openLocationWrapper}>
                        <LinearGradient
                            colors={['#BA9F6A', '#B0996C', '#4A402D']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.openLocationButton}
                        >
                            <Text style={styles.openLocationText}>Open location</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
                        {place.liked ? <ActiveLikeSVG /> : <LikeSVG />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
                        <ShareSVG />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PlaceCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#484848',
        backgroundColor: '#222B2F',
        paddingBottom: 20,
    },
    cardImage: {
        width: '100%',
        height: 179,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        marginBottom: 12,
    },
    cardContent: {
        paddingHorizontal: 12,
    },
    foundPlaceText: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 8,
        color: '#FFFFFF',
    },
    ratingText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 15,
        color: '#B0996C',
        marginBottom: 8,
    },
    descriptionText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '300',
        fontSize: 15,
        marginBottom: 12,
        color: '#B0B0B0',
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 8,
    },
    openLocationWrapper: {
        flex: 1,
    },
    openLocationButton: {
        height: 50,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openLocationText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
    },
    likeButton: {
        width: 50,
        height: 50,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#B0996C',
        backgroundColor: '#232C30',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    shareButton: {
        width: 50,
        height: 50,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#B0996C',
        backgroundColor: '#232C30',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
});
