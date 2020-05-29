import React, { useReducer, useMemo } from 'react';
import './App.css';
import { AppContext } from './Store/AppContext';
import { DropDownContainer } from './Components/DropDownContainer';
import { VehicleInfoCard } from './Components/VehicleInfoCard';
import { reducer } from './Reducers/reducer';
import { initialState } from './Store/initialState';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <div className='App'>
      <AppContext.Provider value={contextValue}>
        <DropDownContainer />
        <VehicleInfoCard />
      </AppContext.Provider>
    </div>
  );
};

export default App;
