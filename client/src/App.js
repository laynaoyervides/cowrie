import React, {useState, useEffect} from "react" 
import {Routes, Route} from "react-router-dom"

//import child Components
import Landing from './Landing'
import Nav from './Nav'
import Home from './Home'
import Collections from './Collections'
import Marketplace from './Marketplace'
import Wallet from './Wallet'
import Learn from './Learn'
import Teach from './Teach'
import ViewArtwork from "./ViewArtwork"
import ViewCollection from "./ViewCollection"
import CollectionArtworks from "./CollectionArtworks"
import ViewTutorial from "./ViewTutorial"
import ViewArtworkDetails from "./ViewArtworkDetails"

import {createTheme, ThemeProvider} from '@mui/material/styles'
import{purple, orange} from 'material-ui-colors';


function App() {

//Get current user
const [user, setUser] = useState(null)

useEffect(()=>{
  fetch("/api/me")
  .then((r)=>{
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

//set mui theme
const theme = createTheme({
  
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#ff6d00',
    },
  },
});

function handleUpdateUser(updatedUser){
        
  setUser(updatedUser);
}


if (!user) return(
<div> 
  <ThemeProvider theme={theme}>
  <Landing onLogin={setUser}/>
  </ThemeProvider>
</div>
)
  
if (user.admin) return (
  <div>
      <ThemeProvider theme={theme}>
    <Nav user={user} setUser={setUser}/>
    <Routes>
      <Route exact path="/" element={<Home user={user} setUser={setUser} onUpdateUser={handleUpdateUser}/>}></Route>
      <Route path="/collections" element={<Collections user={user}/>}></Route>
      <Route path="/marketplace" element={<Marketplace user={user}/>}></Route>
      <Route path="/wallet" element={<Wallet user={user}/>}></Route>
      <Route path="/teach" element={<Teach user={user}/>}></Route>
      <Route exact path="/artworks/:id" element={<ViewArtwork user={user} />}></Route>
      <Route exact path="/collections/:id" element={<ViewCollection  />}></Route>
      <Route exact path="/viewartworks/:id" element={<CollectionArtworks/>}></Route>
      <Route exact path="/tutorials/:id" element={<ViewTutorial />}></Route>
      <Route exact path="/editartwork/:id" element={<ViewArtworkDetails />}></Route>

    </Routes>
    </ThemeProvider>

  </div>
);

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Home user={user} setUser={setUser} onUpdateUser={handleUpdateUser}/>}></Route>
        <Route path="/collections" element={<Collections user={user}/>}></Route>
        <Route path="/marketplace" element={<Marketplace user={user}/>}></Route>
        <Route path="/wallet" element={<Wallet user={user}/>}></Route>
        <Route path="/learn" element={<Learn user={user}/>}></Route>
        <Route exact path="/artworks/:id" element={<ViewArtwork user={user} />}></Route>
        <Route exact path="/collections/:id" element={<ViewCollection  />}></Route>
        <Route exact path="/viewartworks/:id" element={<CollectionArtworks/>}></Route>
        <Route exact path="/tutorials/:id" element={<ViewTutorial />}></Route>
        <Route exact path="/editartwork/:id" element={<ViewArtworkDetails />}></Route>

      </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
