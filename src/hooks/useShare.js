import { Share } from 'react-native';

export const useShare = () => {
    const shareContent = async (content) => {
        try {
            const result = await Share.share({
                message: content,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            console.error('Error sharing content: ', error.message);
        }
    };

    return { shareContent };
};
