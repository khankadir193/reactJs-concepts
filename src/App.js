import './App.css';
import { useEffect, createContext } from 'react';
import AppContext from './ContextApi/AppContext';
import FirstContext from './ContextApi/FirstContext';


function App() {
  return (
    <AppContext>
      <FirstContext />
    </AppContext>
  );
}

export default App;
