import { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar'
import { GameGrid } from './components/CardBox/GameGrid'
import { GenreList } from './components/CardBox/GenreList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'  >
        <NavBar />
      </GridItem>
      <Show above='lg'>

        <GridItem area='aside' bg='gold' >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' bg='blueviolet'>
        <GameGrid />
      </GridItem>


    </Grid>
  )
}

export default App
