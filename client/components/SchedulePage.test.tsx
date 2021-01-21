import React from 'react';
import SchedulePage from 'client/components/SchedulePage';
import { renderWithRedux } from 'client/testing/utils';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import { ScheduleRow } from 'client/reducers/schedule';

jest.mock(
    'client/components/Schedule',
    () => ({ scheduleRow }: { scheduleRow: ScheduleRow }) => (
        <div>{scheduleRow.raceName}</div>
    ),
);

describe('<SchedulePage />', () => {
    const state = getReduxState();

    it('renders title', () => {
        const { queryByText } = renderWithRedux(<SchedulePage />, state);
        expect(queryByText('Schedule')).toBeInTheDocument();
    });

    it('renders race name', () => {
        const { queryByText } = renderWithRedux(<SchedulePage />, state);
        expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
    });
});
