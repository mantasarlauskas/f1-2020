import React from 'react';
import EmptyPage from 'client/components/EmptyPage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<EmptyPage />', () => {
    it('renders empty page', () => {
        const { queryByText } = render(<EmptyPage />);
        expect(queryByText('Oops!')).toBeInTheDocument();
        expect(queryByText('404')).toBeInTheDocument();
    });
});
