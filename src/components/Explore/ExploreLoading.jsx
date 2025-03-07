import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import CafeSVG from '../../assets/explore/CafeSVG';
import BarsSVG from '../../assets/explore/BarsSVG';
import DiningSVG from '../../assets/explore/DiningSVG';
import RestaurantsSVG from '../../assets/explore/RestaurantsSVG';
import Header from '../Header';
import { getRandomPlace } from '../../store/slices/placesSlice';

const ExploreLoading = ({ category, onLoadingComplete }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomPlace({ category, previousId: null }));

        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [dispatch, category, onLoadingComplete]);

    const iconMapping = {
        cafes: CafeSVG,
        restaurants: RestaurantsSVG,
        outdoorDining: DiningSVG,
        bars: BarsSVG,
    };

    const IconComponent = iconMapping[category] || CafeSVG;

    const getDisplayCategory = (cat) => {
        if (cat === 'outdoorDining') {return 'Outdoor Dining';}
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/explore/BgImage.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />

            <Header />

            <View style={styles.bottomBlock}>
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <IconComponent />
                    </View>
                    <Text style={styles.categoryTitle}>
                        {getDisplayCategory(category)}
                    </Text>
                    <View style={styles.loaderContainer}>
                        <LottieView
                            source={{ uri: 'https://lottie.host/57448382-615e-4f33-ac3c-582406e42821/Bu4S1vWTOB.lottie' }}
                            autoPlay
                            loop
                            style={styles.loader}
                        />
                    </View>
                    <Text style={styles.generatingText}>Generating the place for you...</Text>
                    <TouchableOpacity style={styles.exploreButton} disabled activeOpacity={1}>
                        <LinearGradient
                            colors={['#BA9F6A', '#B0996C', '#4A402D']}
                            style={styles.exploreButtonGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.exploreButtonText}>Please wait...</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
    contentContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 14,
    },
    categoryTitle: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    loaderContainer: {
        marginBottom: 16,
    },
    loader: {
        width: 256,
        height: 256,
    },
    generatingText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 26,
        textAlign: 'center',
    },
    exploreButton: {
        marginTop: 16,
        width: '100%',
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
        width: '100%',
    },
    exploreButtonText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export default ExploreLoading;
