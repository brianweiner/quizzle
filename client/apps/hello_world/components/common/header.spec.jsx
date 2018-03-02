import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
  it('renders a "home" link', () => {
    const result = shallow(<Header />);
    expect(result).toMatchSnapshot();
  });
});
