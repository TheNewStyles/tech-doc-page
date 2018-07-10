import React from 'react';
import ReactDOM from 'react-dom';
import MainSectionHeader from '../components/MainSectionHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainSectionHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
