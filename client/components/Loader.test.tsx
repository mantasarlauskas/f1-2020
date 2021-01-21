import React from 'react';
import Loader from 'client/components/Loader';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Loader />', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Loader />);
        expect(asFragment()).toMatchSnapshot();
    });
});
