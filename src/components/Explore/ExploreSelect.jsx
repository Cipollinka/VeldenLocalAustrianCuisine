import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BarsSVG from '../../assets/explore/BarsSVG';
import CafeSVG from '../../assets/explore/CafeSVG';
import DiningSVG from '../../assets/explore/DiningSVG';
import RestaurantsSVG from '../../assets/explore/RestaurantsSVG';
import MountainSVG from '../../assets/onboarding/MountainSVG';
import Header from '../Header';

const ExploreSelect = ({ selectedCategory, onSelectCategory, onExplore }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/explore/BgImage.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />

            <Header />

            <View style={styles.bottomBlock}>
                <View style={styles.mountainContainer}>
                    <MountainSVG />
                </View>

                <Text style={styles.title}>Ready to Explore?</Text>

                <Text style={styles.description}>
                    Tap below to start your culinary adventure in Velden and enjoy the flavors of Austria!
                </Text>

                <View style={styles.categoryRow}>
                    <TouchableOpacity
                        style={[
                            styles.categoryBox,
                            { marginRight: 16 },
                            selectedCategory === 'cafes' && styles.categoryBoxSelected,
                        ]}
                        onPress={() => onSelectCategory('cafes')}
                        activeOpacity={0.8}
                    >
                        <CafeSVG />
                        <Text style={styles.categoryText}>Cafes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.categoryBox,
                            selectedCategory === 'restaurants' && styles.categoryBoxSelected,
                        ]}
                        onPress={() => onSelectCategory('restaurants')}
                        activeOpacity={0.8}
                    >
                        <RestaurantsSVG />
                        <Text style={styles.categoryText}>Restaurants</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryRow}>
                    <TouchableOpacity
                        style={[
                            styles.categoryBox,
                            { marginRight: 16 },
                            selectedCategory === 'outdoorDining' && styles.categoryBoxSelected,
                        ]}
                        onPress={() => onSelectCategory('outdoorDining')}
                        activeOpacity={0.8}
                    >
                        <DiningSVG />
                        <Text style={styles.categoryText}>Outdoor Dining</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.categoryBox,
                            selectedCategory === 'bars' && styles.categoryBoxSelected,
                        ]}
                        onPress={() => onSelectCategory('bars')}
                        activeOpacity={0.8}
                    >
                        <BarsSVG />
                        <Text style={styles.categoryText}>Bars</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.exploreButton}
                    disabled={!selectedCategory}
                    onPress={() => onExplore(selectedCategory)}
                    activeOpacity={0.8}
                >
                    <LinearGradient
                        colors={['#BA9F6A', '#B0996C', '#4A402D']}
                        style={[
                            styles.exploreButtonGradient,
                            !selectedCategory && { opacity: 0.2 },
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.exploreButtonText}>Explore</Text>
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
    mountainContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 20,
        textAlign: 'center',
    },
    categoryRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    categoryBox: {
        flex: 1,
        backgroundColor: '#273336',
        borderWidth: 1,
        borderColor: '#474747',
        borderRadius: 22,
        height: 122,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 22,
        elevation: 4,
    },
    categoryBoxSelected: {
        borderWidth: 2,
        borderColor: '#B0996C',
    },
    categoryText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 16,
    },
    exploreButton: {
        marginTop: 16,
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

export default ExploreSelect;
