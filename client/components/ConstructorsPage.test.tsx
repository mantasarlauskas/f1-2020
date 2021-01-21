import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import ConstructorsPage from 'client/components/ConstructorsPage';
import { renderWithRedux } from 'client/testing/utils';

jest.mock('client/components/ConstructorCard', () => () => <span>ConstructorCard</span>);

describe('<ConstructorsPage />', () => {
    const state = getReduxState();

    it('renders 1 constructor card', () => {
        const { getAllByText } = renderWithRedux(<ConstructorsPage />, state);
        expect(getAllByText('ConstructorCard').length).toEqual(1);
    });
});
