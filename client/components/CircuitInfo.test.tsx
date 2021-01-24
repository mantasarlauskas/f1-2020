import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CircuitInfo from 'client/components/CircuitInfo';
import { getRace } from 'client/testing/testFactories';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<CircuitInfo />', () => {
    const { Circuit, raceName, date } = getRace();
    const props = {
        circuit: Circuit,
        raceName,
        date,
    };

    it('renders content', () => {
        const { queryByText } = render(<CircuitInfo {...props} />);
        expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
        expect(queryByText('Red Bull Ring')).toBeInTheDocument();
        expect(queryByText('Austria')).toBeInTheDocument();
        expect(queryByText('Spielburg')).toBeInTheDocument();
    });
});
