import { Linking, Platform } from 'react-native';

export const useOpenMap = () => {
    const openMap = (latitude, longitude, label = 'Location') => {
        let url = '';

        if (Platform.OS === 'ios') {
            url = `maps://?q=${encodeURIComponent(label)}&ll=${latitude},${longitude}`;
        } else {
            url = `geo:${latitude},${longitude}?q=${encodeURIComponent(label)}`;
        }

        Linking.openURL(url).catch((err) =>
            console.error('Ошибка при открытии карты:', err)
        );
    };

    return { openMap };
};
