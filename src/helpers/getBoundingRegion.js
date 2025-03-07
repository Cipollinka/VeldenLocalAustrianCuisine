export const getBoundingRegion = (items) => {
    if (!items.length) {
        return {
            latitude: 46.6175,
            longitude: 14.0234,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };
    }

    let minLat = Infinity,
        maxLat = -Infinity,
        minLon = Infinity,
        maxLon = -Infinity;

    items.forEach((place) => {
        const { latitude, longitude } = place.coordinates;
        if (latitude < minLat) {minLat = latitude;}
        if (latitude > maxLat) {maxLat = latitude;}
        if (longitude < minLon) {minLon = longitude;}
        if (longitude > maxLon) {maxLon = longitude;}
    });

    const midLat = (minLat + maxLat) / 2;
    const midLon = (minLon + maxLon) / 2;
    const latDelta = (maxLat - minLat) * 1.3 || 0.01;
    const lonDelta = (maxLon - minLon) * 1.3 || 0.01;

    return {
        latitude: midLat,
        longitude: midLon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta,
    };
};
