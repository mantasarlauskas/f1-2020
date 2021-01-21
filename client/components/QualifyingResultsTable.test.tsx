import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import QualifyingResultsTable from 'client/components/QualifyingResultsTable';
import { renderWithRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

describe('<QualifyingResultsTable />', () => {
    const state = getReduxState();
    it('does not render anything when qualifying table data does not exist', () => {
        const { container } = renderWithRedux(
            <QualifyingResultsTable roundId="1" />,
            state,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('renders table data', () => {
        const { queryByText } = renderWithRedux(
            <QualifyingResultsTable roundId="0" />,
            state,
        );

        expect(queryByText('Valtteri Bottas')).toBeInTheDocument();
        expect(queryByText('Mercedes')).toBeInTheDocument();
        expect(queryByText('1:25.154')).toBeInTheDocument();
    });
});
