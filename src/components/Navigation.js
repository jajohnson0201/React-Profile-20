import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">

                <Button>
                    <a
                        href='#AboutMe'
                        onClick={() => handlePageChange("AboutMe")}
                        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </Button>
                <Button>
                    <a
                        href='#Contact'
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </a>
                </Button>
                <Button>
                    <a
                        href='#Portfolio'
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
                </Button>
                <Button>
                    <a
                        href='#Resume'
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
                </Button>
            </ButtonGroup>
        </div>
    );
}



