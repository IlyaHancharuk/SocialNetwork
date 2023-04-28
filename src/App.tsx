import React, { FC } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import { ReduxStoreType } from './Redux/redux-store';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

type AppPropsType = {
  store: ReduxStoreType;
}

const App: FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar state={props.store.getState().sidebarData} />
        <main className='content-wrapper'>
          <Routes>
            <Route element={<ProfileContainer />} path='/profile/:userId' />
            <Route element={<DialogsContainer />} path='/dialogs/*' />
            <Route element={<UsersContainer />} path='/users' />
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
