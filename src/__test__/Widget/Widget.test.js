/**
 * @jest-environment node
 */

import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedWidget from '../../components/Widget/WidgetContainer';

const mockStore = configureStore();

it('renders no post when the store is empty', () => {
  const store = mockStore({ posts: [] });
  const wrapper = render(<ConnectedWidget store={store} />);
  expect(wrapper.find('.frame').length).toBe(0);
});

it('renders posts from props', () => {
  const store = mockStore({ posts: [{id:1, created_at:'Fri Dec 29 19:15:04 +0000 2017', user:{name: 'Name 1'}}, {id:2, created_at:'Fri Dec 29 17:15:04 +0000 2017', user:{name: 'Name 2'}}] });
  const wrapper =  render(<ConnectedWidget store={store} />);
  expect(wrapper.find('.frame').length).toBe(2);
});
