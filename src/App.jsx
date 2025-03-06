import { useState,useEffect } from "react"
import "./index.css"
import SearchBox from "./components/search-box/SearchBox";

import CardList from "./components/cardlist/CardList";

function App() {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])

  const onSearchCahnge = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monster-search-box'
        placeholder='Search Monsters'
        onChangeHandler={onSearchCahnge}
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

export default App
