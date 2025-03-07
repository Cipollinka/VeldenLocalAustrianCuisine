import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ExploreSelect from '../components/Explore/ExploreSelect';
import ExploreLoading from '../components/Explore/ExploreLoading';
import ExploreCard from '../components/Explore/ExploreCard';

export default function ExploreScreen() {
    const [step, setStep] = useState('select');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleExplore = (category) => {
        setSelectedCategory(category);
        setStep('loading');
    };

    const handleLoadingComplete = () => {
        setStep('card');
    };

    const handleSearchNew = () => {
        setSelectedCategory(null);
        setStep('select');
    };

    useFocusEffect(
        useCallback(() => {
            return () => {
                setSelectedCategory(null);
                setStep('select');
            };
        }, [])
    );

    return (
        <>
            {step === 'select' && (
                <ExploreSelect
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    onExplore={handleExplore}
                />
            )}
            {step === 'loading' && (
                <ExploreLoading
                    category={selectedCategory}
                    onLoadingComplete={handleLoadingComplete}
                />
            )}
            {step === 'card' && (
                <ExploreCard
                    category={selectedCategory}
                    onSearchNew={handleSearchNew}
                />
            )}
        </>
    );
}
