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


function App() {

//Get current user
const [user, setUser] = useState(null)

useEffect(()=>{
  fetch("/me")
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
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/collections" element={<Collections/>}></Route>
      <Route path="/marketplace" element={<Marketplace/>}></Route>
      <Route path="/wallet" element={<Wallet/>}></Route>
      <Route path="/teach" element={<Teach/>}></Route>
    </Routes>
  </div>
);

  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/collections" element={<Collections/>}></Route>
        <Route path="/marketplace" element={<Marketplace/>}></Route>
        <Route path="/wallet" element={<Wallet/>}></Route>
        <Route path="/learn" element={<Learn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
