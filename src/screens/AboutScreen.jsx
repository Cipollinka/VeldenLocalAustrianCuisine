import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import ShareButton from '../components/UI/ShareButton';

export default function AboutScreen() {
    const shareMessage =
        'Discover Velden Local Austrian Cuisine – your ultimate guide to authentic Austrian dining! Explore top local restaurants, traditional dishes, and the rich culinary heritage of Velden.';

    return (
        <LinearGradient
            colors={['#263134', '#1F272B']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Header />

            <ImageBackground
                source={require('../assets/AboutBG.png')}
                style={styles.headerImage}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(34, 43, 47, 0)', '#222B2F']}
                    style={styles.headerGradient}
                />
            </ImageBackground>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.tile}>
                    <Text style={styles.title}>
                        About Velden Local Austrian Cuisine
                    </Text>
                    <Text style={styles.description}>
                        Welcome to Velden Local Austrian Cuisine, your ultimate guide to
                        exploring the rich and diverse culinary world of Velden, Austria.
                        Whether you're a food enthusiast or a casual traveler, our app
                        provides an immersive experience into the heart of Austrian dining,
                        focusing on local restaurants, traditional dishes, and culinary
                        heritage.
                    </Text>
                    <Text style={styles.description}>
                        Discover Velden’s Best Spots: The app features a curated selection
                        of the finest restaurants, cafes, outdoor dining spots, and bars in
                        Velden. Browse through comprehensive details including restaurant
                        names, ratings, photos, and descriptions to find your next favorite
                        dining location.
                    </Text>
                    <Text style={styles.description}>
                        Learn About Austrian Culinary Traditions: From classic dishes like
                        Wiener Schnitzel and Tafelspitz to the unique flavors of Velden,
                        this app lets you dive deep into Austria’s culinary history. Explore
                        traditional cooking methods, local specialties, and the regional
                        ingredients that make Velden a hidden gem for food lovers.
                    </Text>
                    <Text style={styles.description}>
                        Save Your Favorite Locations: Easily save your favorite spots and
                        revisit them whenever you wish. Never forget where you enjoyed the
                        best Austrian dishes!
                    </Text>
                    <Text style={styles.description}>
                        Designed for Food Lovers: Whether you’re visiting Velden for the
                        first time or you’re a local looking to rediscover your city, Velden
                        Local Austrian Cuisine offers a simple and intuitive experience. You
                        can explore, learn, and taste your way through the best of Austrian
                        food culture.
                    </Text>

                    <ShareButton shareText={shareMessage} />

                    <View style={styles.bottomSpacing} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 469,
    },
    headerGradient: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        paddingTop: 160,
        paddingBottom: 40,
    },
    tile: {
        borderRadius: 16,
        padding: 32,
        backgroundColor: 'transparent',
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 22,
    },
    description: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 16,
    },
    bottomSpacing: {
        height: 55,
    },
});
