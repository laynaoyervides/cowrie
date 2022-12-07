import React from 'react';
import {Link} from 'react-router-dom'
import {Toolbar, Typography, Tabs, Tab, Button} from '@mui/material'

function Nav({user, setUser}) {
    return (
        <div>
            <Toolbar>
                <Tabs>
                    <Link to="/"><Tab label="Home"></Tab></Link>
                    <Link to="/collections"><Tab label="Collections"></Tab></Link>
                    <Link to="/marketplace"><Tab label="Marketplace"></Tab></Link>
                    <Link to="/wallet"><Tab label="Wallet"></Tab></Link>
                    <Link to="/learn"><Tab label="Learn"></Tab></Link>

                </Tabs>
            </Toolbar>
            
        </div>
    );
}

export default Nav;