import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getDriver } from 'client/testing/testFactories';
import DriverCard from 'client/components/DriverCard';
import { renderWithRouter } from 'client/testing/utils';

describe('<DriverCard />', () => {
    it('renders driver name', () => {
        const { queryByText } = renderWithRouter(<DriverCard driver={getDriver()} index={1} />);
        expect(queryByText('Albon')).toBeInTheDocument();
    });

    it('renders driver image', () => {
        const { queryByAltText } = renderWithRouter(<DriverCard driver={getDriver()} index={1} />);
        expect(queryByAltText('Albon')).toBeInTheDocument();
    });

    it('on click goes to driver page', () => {
        const { container } = renderWithRouter(<DriverCard driver={getDriver()} index={1} />);
        fireEvent.click(container.firstChild as Element);
        expect(window.location.pathname).toEqual('/drivers/albon');
    });
});
