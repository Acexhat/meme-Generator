import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Suspense } from 'react';

const Homepage = React.lazy(() => import('./components/Homepage'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </Suspense>
    </div>
  );
}

export default App;
