import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
// import Recipe from './components/Recipe'
// import Shopping from './components/Shopping'
// import Footer from './components/Footer'

function App() {

  // Hook to conditionally render selected component ?
  
  return (
    <>
      <Header></Header>
      <main>
        <Search></Search>
      </main>
    </>
  );
}

export default App;
