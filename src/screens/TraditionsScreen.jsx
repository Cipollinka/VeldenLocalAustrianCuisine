import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import MountainSVG from '../assets/onboarding/MountainSVG';

export default function TraditionsScreen() {
    const traditions = useSelector((state) => state.traditions.pages);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const navigation = useNavigation();

    const handleCardPress = (id) => {
        setSelectedCardId(id);
    };

    const handleReadNow = (e, item) => {
        e.stopPropagation();
        navigation.navigate('TraditionsInfo', { item });
    };

    return (
        <LinearGradient
            colors={['#263134', '#1F272B']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Header />
            <Image
                source={require('../assets/traditions/bgImage.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.contentBlock}>
                    <View style={styles.mountainContainer}>
                        <MountainSVG />
                    </View>
                    <Text style={styles.title}>Discover Austrian Culinary Traditions</Text>
                    <Text style={styles.description}>
                        Learn about the heritage of Austrian dishes and dive into local culinary tips to enrich your dining experience.
                    </Text>

                    {traditions.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.card, selectedCardId === item.id && styles.cardSelected]}
                            onPress={() => handleCardPress(item.id)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.cardTitle}>{item.subtitle}</Text>
                            <TouchableOpacity
                                style={styles.cardButton}
                                onPress={(e) => handleReadNow(e, item)}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={['#BA9F6A', '#B0996C', '#4A402D']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.cardButtonGradient}
                                >
                                    <Text style={styles.cardButtonText}>Read Now</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 289,
        zIndex: 0,
    },
    scrollContainer: {
        paddingTop: 200,
    },
    contentBlock: {
        paddingTop: 26,
        paddingHorizontal: 30,
        backgroundColor: '#273336',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        borderWidth: 2,
        borderColor: 'transparent',
        borderTopColor: '#B0996C',
        overflow: 'hidden',
        paddingBottom: 120,
    },
    mountainContainer: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 22,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#273336',
        borderWidth: 1,
        borderColor: '#474747',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 22,
        elevation: 4,
        borderRadius: 22,
        paddingVertical: 22,
        paddingHorizontal: 16,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    cardSelected: {
        borderWidth: 2,
        borderColor: '#BA9F6A',
    },
    cardTitle: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 18,
    },
    cardButton: {
        width: '50%',
        alignSelf: 'flex-start',
    },
    cardButtonGradient: {
        height: 50,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardButtonText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
