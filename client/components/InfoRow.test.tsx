import React from 'react';
import InfoRow from 'client/components/InfoRow';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<InfoRow />', () => {
    const props = {
        label: 'label',
        value: 'value',
    };

    it('renders content', () => {
        const { queryByText } = render(<InfoRow {...props} />);
        expect(queryByText('label')).toBeInTheDocument();
        expect(queryByText('value')).toBeInTheDocument();
    });
});
