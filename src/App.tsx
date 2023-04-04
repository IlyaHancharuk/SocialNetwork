import React, { FC } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Content/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/Content/Dialogs/Dialogs';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import { AppPropsType } from './types';

const App: FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <main className='content-wrapper'>
          <Routes>
            <Route element={<Profile postsData={props.state.postsData} />} path='/' />
            <Route element={<Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />} path='/dialogs' />
            <Route element={<News />} path='/news' />
            <Route element={<Music />} path='/music' />
            <Route element={<Settings />} path='/settings' />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
