// src/pages/MyArchivePage.js
import React from 'react';

function MyArchivePage() {
    return React.createElement(
        'div',
        { className: 'my-archive-page' },
        React.createElement('h2', null, 'My Archive Page'),
        React.createElement('p', null, 'Archieved.')
    );
}

export default MyArchivePage;
