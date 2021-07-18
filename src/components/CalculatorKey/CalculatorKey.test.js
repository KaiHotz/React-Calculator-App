import React from 'react';
import { shallow, mount } from 'enzyme';
import { CalculatorKey } from './CalculatorKey';

const baseProps = {
  onClick: jest.fn(),
};

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = shallow(<CalculatorKey {...baseProps} />);

    expect(wrapper).toBeDefined();
  });

  it('should call onClick', () => {
    const wrapper = mount(<CalculatorKey {...baseProps} />);
    wrapper.simulate('click');

    expect(baseProps.onClick).toHaveBeenCalled();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    const wrapper = shallow(<CalculatorKey {...props} />);

    expect(wrapper.find('button').hasClass(props.className)).toBe(true);
  });
});
