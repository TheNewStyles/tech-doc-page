import React from 'react';
import ReactDOM from 'react-dom';
import MainSection from '../components/MainSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
