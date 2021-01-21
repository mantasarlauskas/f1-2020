import React from 'react';
import ListPage from 'client/components/ListPage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<ListPage />', () => {
    const props = {
        title: 'title',
        children: <span>child</span>,
    };

    it('renders content', () => {
        const { queryByText } = render(<ListPage {...props} />);
        expect(queryByText('title')).toBeInTheDocument();
        expect(queryByText('child')).toBeInTheDocument();
    });
});
