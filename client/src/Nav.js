import React from 'react';
import {Link} from 'react-router-dom'
import {Toolbar, Typography, Tabs, Tab, Button} from '@mui/material'

function Nav({user, setUser}) {
    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      if (!user.admin) {
        return(
            <div>
                <Toolbar>
                    <Tabs>
                    <Link to="/"><Tab label="Home"></Tab></Link>
                    <Link to="/collections"><Tab label="Collections"></Tab></Link>
                    <Link to="/marketplace"><Tab label="Marketplace"></Tab></Link>
                    <Link to="/wallet"><Tab label="Wallet"></Tab></Link>
                    <Link to="/learn"><Tab label="Learn"></Tab></Link>
                   

        <header>
                            { user ? (
                                <div
                                style={{
                                    display:"flex",
                                    margin: "20px",
                                    backgroundColor: "#82f7ff",
                                    borderRadius:"5px"

                                    
                                }}>
                                <Typography variant="h6"
                                    sx={{
                                        marginRight: "10px",
                                        paddingLeft: "10px"
                                    }}
                                >Welcome, {user.username}!</Typography>
                                 <Button 
                                 variant="contained"
                                 color="secondary"
                                 marginLeft="10"
                                 onClick={handleLogout}>
                                    LOGOUT
                                </Button>
                                </div>
                                ) : (
                                    <Button sx={{padding: '10px', marginTop: "10px"}} variant="contained" color="secondary"> <Link to="/login">Login</Link></Button>
                                    )
                            }
                        </header>
                    </Tabs>
                   
                </Toolbar>
            </div>
        )
      }


    return (
        <div>
            <Toolbar>
                <Tabs>
                    <Link to="/"><Tab label="Home"></Tab></Link>
                    <Link to="/collections"><Tab label="Collections"></Tab></Link>
                    <Link to="/marketplace"><Tab label="Marketplace"></Tab></Link>
                    <Link to="/wallet"><Tab label="Wallet"></Tab></Link>
                    <Link to="/teach"><Tab label="Teach"></Tab></Link>

                    <header>
                            { user ? (
                                <div
                                style={{
                                    display:"flex",
                                    margin: "20px",
                                    backgroundColor: "#82f7ff",
                                    borderRadius:"5px"

                                    
                                }}>
                                <Typography variant="h6"
                                    sx={{
                                        marginRight: "10px",
                                        paddingLeft: "10px"
                                    }}
                                >Welcome, {user.username}!</Typography>
                                 <Button 
                                 variant="contained"
                                 color="secondary"
                                 marginLeft="10"
                                 onClick={handleLogout}>
                                    LOGOUT
                                </Button>
                                </div>
                                ) : (
                                    <Button sx={{padding: '10px', marginTop: "10px"}} variant="contained" color="secondary"> <Link to="/login">Login</Link></Button>
                                    )
                            }
                        </header>
                </Tabs>
            </Toolbar>
            
        </div>
    );
}

export default Nav;