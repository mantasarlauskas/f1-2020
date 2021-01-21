import React from 'react';
import DriversPage from 'client/components/DriversPage';
import { renderWithRedux } from 'client/testing/utils';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import { getDriverFullName } from 'client/utils/driver';

jest.mock('client/components/DriverCard', () => ({ driver }: any) => (
    <div>{getDriverFullName(driver)}</div>
));

describe('<DriversPage />', () => {
    const state = getReduxState();

    it('renders title', () => {
        const { queryByText } = renderWithRedux(<DriversPage />, state);
        expect(queryByText('Drivers')).toBeInTheDocument();
    });

    it('renders driver name', () => {
        const { queryByText } = renderWithRedux(<DriversPage />, state);
        expect(queryByText('Alexander Albon')).toBeInTheDocument();
    });
});
