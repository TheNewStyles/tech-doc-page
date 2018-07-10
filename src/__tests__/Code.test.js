import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../components/Code';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Code />, div);
  ReactDOM.unmountComponentAtNode(div);
});
