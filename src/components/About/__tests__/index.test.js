import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


// we'll call the cleanup function using the afterEach global function from Jest. This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);
// Then we'll use the describe function to declare the component we're testing, The first test will be the baseline to verify that the component is rendering. In test two, we'll use the asFragment function, which returns a snapshot of the About component. Then we'll test and compare whether the expected and actual outcomes match. Use the expect function with a matcher to assert something about a value using the toMatchSnapshot matcher to assert that snapshots will match:
describe('About component', () =>
{
    // First Test
    it('renders', () =>
    {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () =>
    {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})

