import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import ShareButton from '../components/UI/ShareButton';

export default function TraditionsInfoScreen() {
    const { params } = useRoute();
    const { item } = params;
    const navigation = useNavigation();
    const shareMessage = `${item.title}\n\n${item.content}`;

    return (
        <LinearGradient
            colors={['#263134', '#1F272B']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Header />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.tile}>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <ShareButton shareText={shareMessage} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TraditionsMain')}
                        style={styles.readOtherContainer}
                    >
                        <Text style={styles.readOtherText}>Read Other</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    subtitle: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    content: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        color: '#B8B8B8',
        marginBottom: 16,
    },
    readOtherContainer: {
        marginTop: 24,
        marginBottom: 85,
        alignSelf: 'center',
    },
    readOtherText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
