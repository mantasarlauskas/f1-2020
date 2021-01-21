import React from 'react';
import { render } from '@testing-library/react';
import ResultsTable from 'client/components/ResultsTable';
import '@testing-library/jest-dom/extend-expect';

describe('<ResultsTable />', () => {
    const props = {
        head: <tr><th>head</th></tr>,
        children: <tr><td>children</td></tr>,
    };

    it('renders content', () => {
        const { queryByText } = render(<ResultsTable {...props} />);
        expect(queryByText('head')).toBeInTheDocument();
        expect(queryByText('children')).toBeInTheDocument();
    });

    it('renders title', () => {
        const { queryByText } = render(<ResultsTable {...props} title="title" />);
        expect(queryByText('title')).toBeInTheDocument();
    });
});
