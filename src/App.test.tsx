import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App state={{
    profilePage: {
      postsData: [],
      newPostText: ''
    },
    dialogsPage: {
      dialogsData: [],
      messagesData: []
    },
    sidebarData: {
      friendsData: []
    }
  }} addPost={function (): void {
    throw new Error('Function not implemented.');
  } } changePostText={function (postText: string): void {
    throw new Error('Function not implemented.');
  } }  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
