import React, { FC } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Content/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import { ReduxStoreType } from './types';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';

type AppPropsType = {
  store: ReduxStoreType;
}

const App: FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.store.getState().sidebarData} />
        <main className='content-wrapper'>
          <Routes>
            <Route element={<Profile store={props.store}/>} path='/' />
            <Route element={<DialogsContainer store={props.store} />} path='/dialogs/*' />
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
