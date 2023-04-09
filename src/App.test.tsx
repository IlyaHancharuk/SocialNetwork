import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ActionType } from './types';

test('renders learn react link', () => {
  render(<App state={{
    profilePage: {
      postsData: [],
      newPostText: ''
    },
    dialogsPage: {
      dialogsData: [],
      messagesData: [],
      newMessageText: ''
    },
    sidebarData: {
      friendsData: []
    }
  }} dispatch={function <T>(action: ActionType<T>): void {
    throw new Error('Function not implemented.');
  } } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
