import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    screens: [
        {
            id: '1',
            title: 'Welcome to Velden Local\nAustrian Cuisine!',
            text: 'Explore the rich flavors and culinary traditions of Velden, Austria. Discover the best local restaurants, unique Austrian dishes, and much more!',
            image: require('../../assets/onboarding/bg/1.png'),
            buttonLabel: 'Start Exploring',
        },
        {
            id: '2',
            title: 'Find the Best\nPlaces to Eat',
            text: 'Browse through a selection of top restaurants and cafes in Velden. Each listing includes the name, rating, photo, and a brief description to help you decide where to go.',
            image: require('../../assets/onboarding/bg/2.png'),
            buttonLabel: 'Next',
        },
        {
            id: '3',
            title: 'Discover Austrian\nCulinary Traditions',
            text: 'Learn about the heritage of Austrian dishes and dive into local culinary tips to enrich your dining experience.',
            image: require('../../assets/onboarding/bg/3.png'),
            buttonLabel: 'Next',
        },
        {
            id: '4',
            title: 'Save Your Favorite\nSpots',
            text: 'Easily save your favorite restaurants and cafes for future visits. Keep track of where you want to go next.',
            image: require('../../assets/onboarding/bg/4.png'),
            buttonLabel: 'Next',
        },
        {
            id: '5',
            title: 'Ready to Explore?',
            text: 'Tap below to start your culinary adventure in Velden and enjoy the flavors of Austria!',
            image: require('../../assets/onboarding/bg/5.png'),
            buttonLabel: 'Let’s Go!',
        },
    ],
};

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {},
});

export default onboardingSlice.reducer;
