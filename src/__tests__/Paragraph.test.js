import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from '../components/Paragraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paragraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});
