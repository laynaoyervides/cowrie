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
                    <Link to="/"><Tab label="Home" value="0"/></Link>
                    <Link to="/collections"><Tab label="Collections" value="1"/></Link>
                    <Link to="/marketplace"><Tab label="Marketplace" value="2"/></Link>
                    <Link to="/wallet"><Tab label="Wallet" value="3"/></Link>
                    <Link to="/learn"><Tab label="Learn" value="4"/></Link>
                   

        <header>
                            { user ? (
                                <div
                                style={{
                                    display:"flex",
                                    margin: "20px",
                                    backgroundcolor: "#82f7ff",
                                    borderRadius:"5px"

                                    
                                }}>
                                <Typography variant="h6"
                                    sx={{
                                        marginright: "10px",
                                        paddingleft: "10px"
                                    }}
                                >Welcome, {user.username}!</Typography>
                                 <Button 
                                 variant="contained"
                                 color="secondary"
                                 marginleft="10"
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
                    <Link to="/"><Tab label="Home" value="0"/></Link>
                    <Link to="/collections"><Tab label="Collections" value="1"/></Link>
                    <Link to="/marketplace"><Tab label="Marketplace"value="2"/></Link>
                    <Link to="/wallet"><Tab label="Wallet" value="3"/></Link>
                    <Link to="/teach"><Tab label="Teach" value="4"/></Link>

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
                                 marginleft="10"
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