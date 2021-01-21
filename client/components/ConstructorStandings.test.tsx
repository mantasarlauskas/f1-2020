import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { getConstructorStandingsRow, getReduxState } from 'client/testing/testFactories';
import ConstructorStandings from 'client/components/ConstructorStandings';

describe('<ConstructorStandings />', () => {
    const state = getReduxState();
    const constructorStandingsRow = getConstructorStandingsRow();
    const props = { constructorStandingsRow };

    it('does not render anything if constructor id is invalid', () => {
        const { container } = renderWithRouterAndRedux(
            <ConstructorStandings
                constructorStandingsRow={{ ...constructorStandingsRow, constructorId: 'id' }}
            />,
            state,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('shows constructor standings information', () => {
        const { queryByAltText, queryByText } = renderWithRouterAndRedux(
            <ConstructorStandings {...props} />,
            state,
        );

        expect(queryByText('Red Bull')).toBeInTheDocument();
        expect(queryByAltText('Red Bull')).toBeInTheDocument();
        expect(queryByText('1')).toBeInTheDocument();
        expect(queryByText('573')).toBeInTheDocument();
    });

    it('on constructor name click goes to constructor page', () => {
        const { getByText } = renderWithRouterAndRedux(
            <ConstructorStandings {...props} />,
            state,
        );

        fireEvent.click(getByText('Red Bull'));
        expect(window.location.pathname).toEqual('/constructors/red_bull');
    });
});
