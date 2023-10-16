import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const Search = () => {
  // state to grab search input from forms
  const [searchInput, setSearchInput] = useState('');

  // handle search functionality
  const searchRecipes = (searchValue) => {
    // receive search query into function and set searchInput state to this value
    setSearchInput(searchValue)
    APIData.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
  }

  return (
    <>
      <Container>
        <h1>iNeedaDrink</h1>
        <p>Welcome! Search for a cocktail recipe below, either by drink name or an ingredient you may already have in the fridge.</p>

        {/* Search by drink name form */}
        <InputGroup id='search-group1'>
          <InputGroup.Text>Pick your poison:</InputGroup.Text>
          <Form.Control
            placeholder='"Martini"'
            aria-label='User Drink Search'
            // pass input value to the searchRecipes function
                // !! Does not log in the console using searchValue :(
            onChange={(e) => searchRecipes(e.target.value)}
          />
          <Button id='drink-button' onClick={() => searchRecipes()}>
            Search
          </Button>
        </InputGroup>

        {/* Search by ingredient form */}
        <InputGroup id='search-group2'>
          <InputGroup.Text>Ingredient:</InputGroup.Text>
          <Form.Control 
            placeholder='"Vodka"'
            aria-label='User Ingredient Search'
            onChange={(e) => searchRecipes(e.target.value)}
          />
          <Button id='ing-button' onClick={() => searchRecipes()}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </>
  )
}

export default Search;