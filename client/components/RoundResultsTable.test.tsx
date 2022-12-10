import React from 'react';
import RoundResultsTable from 'client/components/RoundResultsTable';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { fetchData } from 'server/utils';
import { getReduxState, getRoundResults } from 'client/testing/testFactories';
import { waitFor } from '@testing-library/react';
import { addRoundResults } from 'client/state/roundResults';
import * as roundResults from 'client/state/roundResults';
import { mapRoundResults } from 'client/utils/clientData';

jest.mock('client/utils/clientData');
jest.spyOn(roundResults, 'addRoundResults');

describe('<RoundResultsTable />', () => {
    (fetchData as jest.Mock) = jest.fn().mockResolvedValue(getRoundResults());
    (mapRoundResults as jest.Mock) = jest.fn().mockImplementation((data: any) => data[1]);
    window.fetch = jest.fn();
    const state = getReduxState();
    const props = {
        roundId: '0',
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders race table', () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsTable {...props} />, state, {
            url: '/results/0',
            path: '/results/:id',
        });

        expect(queryByText('Max Verstappen')).toBeInTheDocument();
        expect(queryByText('Red Bull')).toBeInTheDocument();
    });

    it('renders qualifying table', () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsTable {...props} />, state, {
            url: '/results/0/qualifying',
            path: '/results/:id',
        });

        expect(queryByText('Valtteri Bottas')).toBeInTheDocument();
        expect(queryByText('Mercedes')).toBeInTheDocument();
    });

    it('renders pit stops table', () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsTable {...props} />, state, {
            url: '/results/0/pitstops',
            path: '/results/:id',
        });

        expect(queryByText('Alexander Albon')).toBeInTheDocument();
        expect(queryByText('28.417')).toBeInTheDocument();
    });

    it('does request if table does not exist and then shows table', async () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsTable roundId="1" />, state, {
            url: '/results/1',
            path: '/results/:id',
        });

        await waitFor(() => {
            expect(fetchData).toHaveBeenCalledWith('1/results', expect.anything());
            expect(fetchData).toHaveBeenCalledWith('1/qualifying', expect.anything());
            expect(fetchData).toHaveBeenCalledWith('1/pitstops', expect.anything());
            expect(addRoundResults).toHaveBeenCalledTimes(1);
            expect(addRoundResults).toHaveBeenCalledWith('1', getRoundResults());
            expect(queryByText('Max Verstappen')).toBeInTheDocument();
            expect(queryByText('Red Bull')).toBeInTheDocument();
        });
    });
});
