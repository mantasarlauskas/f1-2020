import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { getDriverStandingsRow, getReduxState } from 'client/testing/testFactories';
import DriverStandings from 'client/components/DriverStandings';

describe('<DriverStandings />', () => {
    const state = getReduxState();
    const driverStandingsRow = getDriverStandingsRow();
    const props = { driverStandingsRow };

    it('does not render anything if driver id is invalid', () => {
        const { container } = renderWithRouterAndRedux(
            <DriverStandings
                driverStandingsRow={{ ...driverStandingsRow, driverId: 'id' }}
            />,
            state,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('shows driver standings information', () => {
        const { queryByAltText, queryByText } = renderWithRouterAndRedux(
            <DriverStandings {...props} />,
            state,
        );

        expect(queryByText('Alexander Albon')).toBeInTheDocument();
        expect(queryByAltText('Red Bull')).toBeInTheDocument();
        expect(queryByText('8')).toBeInTheDocument();
        expect(queryByText('93')).toBeInTheDocument();
    });

    it('on driver name click goes to driver page', () => {
        const { getByText } = renderWithRouterAndRedux(
            <DriverStandings {...props} />,
            state,
        );

        fireEvent.click(getByText('Alexander Albon'));
        expect(window.location.pathname).toEqual('/drivers/albon');
    });
});
