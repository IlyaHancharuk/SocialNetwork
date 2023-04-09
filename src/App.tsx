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
import { ActionType, StateType } from './types';

type AppPropsType = {
  state: StateType;
  dispatch<T>(action: ActionType<T>): void;
}

const App: FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.sidebarData} />
        <main className='content-wrapper'>
          <Routes>
            <Route element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>} path='/' />
            <Route element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} path='/dialogs' />
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
