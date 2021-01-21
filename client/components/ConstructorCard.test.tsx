import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getConstructor } from 'client/testing/testFactories';
import ConstructorCard from 'client/components/ConstructorCard';
import { renderWithRouter } from 'client/testing/utils';

describe('<ConstructorCard />', () => {
    const constructor = getConstructor();

    it('renders constructor name', () => {
        const { queryByText } = renderWithRouter(<ConstructorCard constructorInfo={constructor} />);
        expect(queryByText('Red Bull')).toBeInTheDocument();
    });

    it('renders constructor image', () => {
        const { queryByAltText } = renderWithRouter(<ConstructorCard constructorInfo={constructor} />);
        expect(queryByAltText('Red Bull')).toBeInTheDocument();
    });

    it('on click goes to constructor page', () => {
        const { getByText } = renderWithRouter(<ConstructorCard constructorInfo={constructor} />);
        fireEvent.click(getByText('Red Bull'));
        expect(window.location.pathname).toEqual('/constructors/red_bull');
    });
});
