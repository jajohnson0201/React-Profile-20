import Nav from './Navigation';
import React from 'react';

export default function Header ({currentPage,handlePageChange}) {
    return (
        <div>
            <h1>Joel Johnson</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}