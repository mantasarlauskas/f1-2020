import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/react';
import DriverResultsTable from 'client/components/DriverResultsTable';
import { renderWithRedux } from 'client/testing/utils';
import { getDriverResultsResponse, getReduxState } from 'client/testing/testFactories';
import { fetchData } from 'server/utils';

jest.mock('server/utils');

describe('<DriverResultsTable />', () => {
    (fetchData as jest.Mock) = jest.fn().mockResolvedValue(getDriverResultsResponse());
    window.fetch = jest.fn();
    const state = getReduxState();

    it('shows driver results table', async () => {
        const { queryByText } = renderWithRedux(
            <DriverResultsTable driverId="hamilton" />,
            state,
        );

        await waitFor(() => {
            expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
            expect(queryByText('Styrian Grand Prix')).toBeInTheDocument();
        });
    });

    it('does not show anything when results does not exist', async () => {
        (fetchData as jest.Mock) = jest.fn().mockResolvedValueOnce({ RaceTable: { Races: [] } });
        const { container } = renderWithRedux(
            <DriverResultsTable driverId="hamilton" />,
            state,
        );

        await waitFor(() => {
            expect(container).toBeEmptyDOMElement();
        });
    });
});
