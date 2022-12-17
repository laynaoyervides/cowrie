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

if (!user) return(
<div> 
  <Landing onLogin={setUser}/>
</div>
)
  
if (user.admin) return (
  <div>
    <Nav user={user} setUser={setUser}/>
    <Routes>
      <Route exact path="/" element={<Home user={user}/>}></Route>
      <Route path="/collections" element={<Collections user={user}/>}></Route>
      <Route path="/marketplace" element={<Marketplace user={user}/>}></Route>
      <Route path="/wallet" element={<Wallet user={user}/>}></Route>
      <Route path="/teach" element={<Teach user={user}/>}></Route>
      <Route exact path="/artworks/:id" element={<ViewArtwork  />}></Route>
    </Routes>
  </div>
);

  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Home user={user}/>}></Route>
        <Route path="/collections" element={<Collections user={user}/>}></Route>
        <Route path="/marketplace" element={<Marketplace user={user}/>}></Route>
        <Route path="/wallet" element={<Wallet user={user}/>}></Route>
        <Route path="/learn" element={<Learn user={user}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
