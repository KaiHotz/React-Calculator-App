import React from 'react';
import { shallow, mount } from 'enzyme';
import { Calculator } from './Calculator';

describe('<Calculator />', () => {
  it('should render', () => {
    const wrapper = shallow(<Calculator />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should sum correctly', () => {
    const wrapper = mount(<Calculator />);

    wrapper.find('.calculator-key.key-6').simulate('click');
    wrapper.find('.calculator-key.key-add').simulate('click');
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-equals').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('8');
  });

  it('should rest correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-6').simulate('click');
    wrapper.find('.calculator-key.key-subtract').simulate('click');
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-equals').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('4');
  });

  it('should divide correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-6').simulate('click');
    wrapper.find('.calculator-key.key-divide').simulate('click');
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-equals').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('3');
  });

  it('should multiply correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-6').simulate('click');
    wrapper.find('.calculator-key.key-multiply').simulate('click');
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-equals').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('12');
  });

  it('should show decimals correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-dot').simulate('click');
    wrapper.find('.calculator-key.key-2').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('0.2');
  });

  it('should invert sign correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-sign').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('-2');
  });

  it('should apply % correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-percent').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('0.02');
  });

  it('should clear the display correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-3').simulate('click');
    wrapper.find('.calculator-key.key-4').simulate('click');
    wrapper.find('.calculator-key.key-clear').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('0');
  });

  it('should toggle the sign correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-key.key-2').simulate('click');
    wrapper.find('.calculator-key.key-sign').simulate('click');

    expect(wrapper.find('.calculator-display__auto-scaling').text()).toEqual('-2');
  });
});
