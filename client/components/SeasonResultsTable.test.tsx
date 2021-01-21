import React from 'react';
import SeasonResultsTable, { ResultsStateName } from 'client/components/SeasonResultsTable';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from 'client/testing/utils';
import { fetchData } from 'server/utils';
import { getDriverResultsResponse, getReduxState } from 'client/testing/testFactories';
import { waitFor } from '@testing-library/react';
import { addDriverResults } from 'client/reducers/driverResults';
import * as driverResults from 'client/reducers/driverResults';
import { mapDriverResults } from 'client/utils/clientData';

jest.spyOn(driverResults, 'addDriverResults');

describe('<SeasonResultsTable />', () => {
    (fetchData as jest.Mock) = jest.fn().mockResolvedValue(getDriverResultsResponse());
    window.fetch = jest.fn();
    const state = getReduxState();
    const props = {
        id: 'id',
        stateName: ResultsStateName.DRIVERS,
        url: '/url',
        mapResults: mapDriverResults,
        addResults: addDriverResults,
        head: <tr><th>head</th></tr>,
        content: () => <tr><td>content</td></tr>,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders table', async () => {
        const { queryByText } = renderWithRedux(<SeasonResultsTable {...props} />, state);
        await waitFor(() => {
            expect(queryByText('Season results')).toBeInTheDocument();
            expect(queryByText('head')).toBeInTheDocument();
            expect(queryByText('content')).toBeInTheDocument();
            expect(addDriverResults).toHaveBeenCalledTimes(1);
        });
    });

    it('does not render table when response is empty', async () => {
        (fetchData as jest.Mock) = jest.fn().mockResolvedValueOnce({ RaceTable: { Races: [] } });
        const { container } = renderWithRedux(<SeasonResultsTable {...props} />, state);

        await waitFor(() => {
            expect(container).toBeEmptyDOMElement();
            expect(addDriverResults).toHaveBeenCalledTimes(0);
        });
    });
});
