import React, {useState} from 'react';
import AppRouter from './Router';
import {authService} from "../huobase";


function App() {
  // will handle all the logics
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return(<>
  <AppRouter isLoggedIn={isLoggedIn}/>
  <footer>&copy; {new Date().getFullYear()} Bwitter</footer>
  </>
  );
}

export default App;
