// src/pages/MembersPage.js
import React from 'react';

function MembersPage() {
    return React.createElement(
        'div',
        { className: 'members-page' },
        React.createElement('h2', null, 'Members Page'),
        React.createElement('p', null, 'This page shows list members.')
    );
}

export default MembersPage;
