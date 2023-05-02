import React, { FC, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import { AppStateType } from './Redux/redux-store';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPageContainer from './components/Login/LoginPageContainer';
import { getAuthThunkCreator } from './Redux/redusers/authReducer';
import { connect } from 'react-redux';

type MapStatePropsType = { state: AppStateType }
type MapDispatchPropsType = {
    getAuth(isAuth: boolean): void;
}
type AppPropsType = MapStatePropsType & MapDispatchPropsType;

const App: FC<AppPropsType> = ({ state }) => {

    // useLayoutEffect(() => {
    //     if (!state.auth.isAuth) {
    //         getAuthThunkCreator(!state.auth.isAuth)
    //     }
    // }, [state])

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Sidebar state={state.sidebarData} />
                <main className='content-wrapper'>
                    <Routes>
                        <Route element={<LoginPageContainer />} path='/login' />
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

const mstp = (state: AppStateType) => {
    return { state }
}

export default connect(mstp, { getAuth: getAuthThunkCreator })(App);
