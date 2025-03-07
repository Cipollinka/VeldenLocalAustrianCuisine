import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cafes: [
        {
            id: 1,
            name: 'Cafe am See',
            description: 'A cozy cafe with lakeside views offering great coffee and pastries.',
            rating: 4.5,
            coordinates: { latitude: 46.6171, longitude: 14.0221 },
            image: require('../../assets/places/cafes/CafeAmSee.png'),
            liked: false,
        },
        {
            id: 2,
            name: 'Kaffekommune',
            description: 'A modern cafe offering specialty coffee and freshly baked cakes.',
            rating: 4.7,
            coordinates: { latitude: 46.6162, longitude: 14.0214 },
            image: require('../../assets/places/cafes/Kaffekommune.png'),
            liked: false,
        },
        {
            id: 3,
            name: 'Velden Coffee Shop',
            description: 'A charming coffee shop known for its warm ambiance and delicious coffee.',
            rating: 4.6,
            coordinates: { latitude: 46.6168, longitude: 14.0243 },
            image: require('../../assets/places/cafes/VeldenCoffeeShop.png'),
            liked: false,
        },
        {
            id: 4,
            name: 'Bäckerei Huber',
            description: 'A bakery and cafe serving freshly baked bread, cakes, and excellent coffee.',
            rating: 4.3,
            coordinates: { latitude: 46.6175, longitude: 14.0207 },
            image: require('../../assets/places/cafes/BackereiHuber.png'),
            liked: false,
        },
        {
            id: 5,
            name: 'Cafe Central',
            description: 'A historic cafe with a large selection of coffees and Austrian pastries.',
            rating: 4.8,
            coordinates: { latitude: 46.6178, longitude: 14.0192 },
            image: require('../../assets/places/cafes/CafeCentral.png'),
            liked: false,
        },
    ],
    restaurants: [
        {
            id: 6,
            name: 'Restaurant Seerose',
            description: 'Fine dining with a focus on fresh, local ingredients and classic Austrian dishes.',
            rating: 4.6,
            coordinates: { latitude: 46.6192, longitude: 14.0260 },
            image: require('../../assets/places/restaurants/RestaurantSeerose.png'),
            liked: false,
        },
        {
            id: 7,
            name: 'Gasthof Zur Post',
            description: 'Traditional Austrian restaurant known for its hearty dishes and friendly service.',
            rating: 4.5,
            coordinates: { latitude: 46.6179, longitude: 14.0250 },
            image: require('../../assets/places/restaurants/GasthofZurPost.png'),
            liked: false,
        },
        {
            id: 8,
            name: 'Sonnenhof Restaurant',
            description: 'A family-friendly restaurant with a focus on regional cuisine and fresh ingredients.',
            rating: 4.4,
            coordinates: { latitude: 46.6183, longitude: 14.0273 },
            image: require('../../assets/places/restaurants/SonnenhofRestaurant.png'),
            liked: false,
        },
        {
            id: 9,
            name: 'Gasthaus Bierstindl',
            description: 'A rustic restaurant offering delicious Austrian comfort food in a cozy setting.',
            rating: 4.3,
            coordinates: { latitude: 46.6189, longitude: 14.0235 },
            image: require('../../assets/places/restaurants/GasthausBierstindl.png'),
            liked: false,
        },
        {
            id: 10,
            name: 'Schlosshotel Velden Restaurant',
            description: 'Luxurious restaurant with breathtaking views of the lake and exquisite gourmet food.',
            rating: 4.7,
            coordinates: { latitude: 46.6173, longitude: 14.0227 },
            image: require('../../assets/places/restaurants/SchlosshotelVeldenRestaurant.png'),
            liked: false,
        },
    ],
    outdoorDining: [
        {
            id: 11,
            name: 'Schwimmbad-Restaurant',
            description: 'An outdoor restaurant with a great selection of grilled food and drinks by the lake.',
            rating: 4.4,
            coordinates: { latitude: 46.6160, longitude: 14.0203 },
            image: require('../../assets/places/outdoorDining/SchwimmbadRestaurant.png'),
            liked: false,
        },
        {
            id: 12,
            name: 'Fischerhütte Velden',
            description: 'A charming lakeside restaurant offering a mix of Austrian and Mediterranean dishes.',
            rating: 4.3,
            coordinates: { latitude: 46.6165, longitude: 14.0271 },
            image: require('../../assets/places/outdoorDining/FischerhutteVelden.png'),
            liked: false,
        },
        {
            id: 13,
            name: 'Seeblick Terrace',
            description: 'Enjoy Austrian classics on a beautiful terrace overlooking the lake.',
            rating: 4.5,
            coordinates: { latitude: 46.6158, longitude: 14.0276 },
            image: require('../../assets/places/outdoorDining/SeeblickTerrace.png'),
            liked: false,
        },
        {
            id: 14,
            name: 'Pizzeria Al Lago',
            description: 'A pizza and pasta haven with a view of the lake, perfect for casual dining.',
            rating: 4.6,
            coordinates: { latitude: 46.6162, longitude: 14.0225 },
            image: require('../../assets/places/outdoorDining/PizzeriaAlLago.png'),
            liked: false,
        },
        {
            id: 15,
            name: 'Lakeside Grill',
            description: 'Casual lakeside dining with grilled meats, fish, and refreshing beverages.',
            rating: 4.7,
            coordinates: { latitude: 46.6176, longitude: 14.0220 },
            image: require('../../assets/places/outdoorDining/LakesideGrill.png'),
            liked: false,
        },
    ],
    bars: [
        {
            id: 16,
            name: 'Königswirt Bar',
            description: 'A lively bar with a great selection of local drinks and a relaxed atmosphere.',
            rating: 4.2,
            coordinates: { latitude: 46.6195, longitude: 14.0252 },
            image: require('../../assets/places/bars/KonigswirtBar.png'),
            liked: false,
        },
        {
            id: 17,
            name: 'Pub Zur Alten Schule',
            description: 'A cozy pub offering traditional Austrian beers and local snacks.',
            rating: 4.4,
            coordinates: { latitude: 46.6182, longitude: 14.0224 },
            image: require('../../assets/places/bars/PubZurAltenSchule.png'),
            liked: false,
        },
        {
            id: 18,
            name: 'Fischerbar',
            description: 'A waterfront bar with cocktails and great views of the lake.',
            rating: 4.5,
            coordinates: { latitude: 46.6171, longitude: 14.0239 },
            image: require('../../assets/places/bars/Fischerbar.png'),
            liked: false,
        },
        {
            id: 19,
            name: 'Bar Kraler',
            description: 'A stylish bar with a relaxed atmosphere and a great selection of wines and cocktails.',
            rating: 4.3,
            coordinates: { latitude: 46.6160, longitude: 14.0211 },
            image: require('../../assets/places/bars/BarKraler.png'),
            liked: false,
        },
        {
            id: 20,
            name: 'Beach Bar Velden',
            description: 'A beachside bar perfect for enjoying cocktails while watching the sunset.',
            rating: 4.6,
            coordinates: { latitude: 46.6156, longitude: 14.0209 },
            image: require('../../assets/places/bars/BeachBarVelden.png'),
            liked: true,
        },
    ],
    currentPlace: {
        cafes: null,
        restaurants: null,
        outdoorDining: null,
        bars: null,
    },
};

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const { id } = action.payload;
            Object.keys(state).forEach((key) => {
                if (Array.isArray(state[key])) {
                    const place = state[key].find((item) => item.id === id);
                    if (place) {
                        place.liked = !place.liked;
                    }
                }
            });
            Object.keys(state.currentPlace).forEach((category) => {
                if (state.currentPlace[category] && state.currentPlace[category].id === id) {
                    state.currentPlace[category].liked = state.currentPlace[category].liked;
                    const updatedPlace = state[category]?.find((item) => item.id === id);
                    if (updatedPlace) {
                        state.currentPlace[category] = updatedPlace;
                    }
                }
            });
        },
        getRandomPlace: (state, action) => {
            const { category } = action.payload;
            const places = state[category];
            if (!places || places.length === 0) {return;}
            const randomIndex = Math.floor(Math.random() * places.length);
            state.currentPlace[category] = places[randomIndex];
        },
    },
});

export const { toggleLike, getRandomPlace } = placesSlice.actions;
export default placesSlice.reducer;
