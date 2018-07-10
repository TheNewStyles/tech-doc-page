import React from 'react';
import ReactDOM from 'react-dom';
import ExternalLink from '../components/ExternalLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExternalLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});
