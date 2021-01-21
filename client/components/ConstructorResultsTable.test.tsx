import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/react';
import ConstructorResultsTable from 'client/components/ConstructorResultsTable';
import { renderWithRedux } from 'client/testing/utils';
import { getConstructorResultsResponse, getReduxState } from 'client/testing/testFactories';
import { fetchData } from 'server/utils';

jest.mock('server/utils');

describe('<ConstructorResultsTable />', () => {
    (fetchData as jest.Mock) = jest.fn().mockResolvedValue(getConstructorResultsResponse());
    window.fetch = jest.fn();
    const state = getReduxState();

    it('shows constructor results table', async () => {
        const { queryAllByText, queryByText } = renderWithRedux(
            <ConstructorResultsTable constructorId="alfa" />,
            state,
        );

        await waitFor(() => {
            expect(queryAllByText('Austrian Grand Prix').length).toEqual(2);
            expect(queryByText('Kimi Räikkönen')).toBeInTheDocument();
            expect(queryByText('Antonio Giovinazzi')).toBeInTheDocument();
        });
    });

    it('does not show anything when results does not exist', async () => {
        (fetchData as jest.Mock) = jest.fn().mockResolvedValueOnce({ RaceTable: { Races: [] } });
        const { container } = renderWithRedux(
            <ConstructorResultsTable constructorId="alfa" />,
            state,
        );

        await waitFor(() => {
            expect(container).toBeEmptyDOMElement();
        });
    });
});
