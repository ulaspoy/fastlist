// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import MyListPage from './pages/MyListPage';
import OurListPage from './pages/OurListPage';
import MyArchivePage from './pages/MyArchivePage';  
import OurArchivePage from './pages/OurArchivePage';
import MembersPage from './pages/MembersPage';

function App() {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'home':
                return React.createElement(HomePage);
            case 'create':
                return React.createElement(CreatePage);
            case 'my-lists':
                return React.createElement(MyListPage);
            case 'our-lists':
                return React.createElement(OurListPage);
            case 'my-archive':
                return React.createElement(MyArchivePage); 
            case 'our-archive':
                return React.createElement(OurArchivePage);
            case 'members':
                return React.createElement(MembersPage);
            default:
                return React.createElement(HomePage);
        }
    };

    return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(Sidebar, { setPage: setPage }),
        React.createElement('div', { className: 'content' }, renderPage())
    );
}

export default App;
