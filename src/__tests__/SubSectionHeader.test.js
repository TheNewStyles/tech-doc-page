import React from 'react';
import ReactDOM from 'react-dom';
import SubSectionHeader from '../components/SubSectionHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubSectionHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
