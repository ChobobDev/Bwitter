import React, {useState, useEffect} from 'react';
import AppRouter from './Router';
import {authService} from "../huobase";


function App() {
  const [init,setInit] = useState(false);
  // will handle all the logics
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);

    });
  },[]);
  return (
  <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing" }
    <footer>&copy; {new Date().getFullYear()} Bwitter</footer>
  </>
  );
}

export default App;
