import { render, screen } from '@testing-library/react';
import { generateTruckFeatures, createTruckLayer } from '../../layers/food-trucks';

test('generateTruckFeatures creates the features', () => {
    const testApplicant = 'Datam SF LLC dba Anzu To You'
    const features = generateTruckFeatures();
    console.log(features);
    expect(features[0]).toBeTruthy();
});
