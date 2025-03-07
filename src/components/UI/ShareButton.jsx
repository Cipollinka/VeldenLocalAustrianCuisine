import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useShare } from '../../hooks/useShare';

export default function ShareButton({ shareText }) {
    const { shareContent } = useShare();

    const handleShare = () => {
        shareContent(shareText);
    };

    return (
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <LinearGradient
                colors={['#BA9F6A', '#B0996C', '#4A402D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.shareButtonGradient}
            >
                <Text style={styles.shareButtonText}>Share</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    shareButton: {
        alignSelf: 'center',
        width: '100%',
    },
    shareButtonGradient: {
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
    shareButtonText: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
