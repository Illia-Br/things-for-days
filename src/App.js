import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [karimsThings, setkarimsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [lukesThings, setLukesThings] = useState([
    {
      name: 'dog',
      image:
        'https://www.princeton.edu/sites/default/files/styles/half_1x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=fAtaOLnw',
      attributes: [
        'good boy',
        'smells',
        'not a taco',
        'bark bark bark bark',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'nothing',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png',
      attributes: [
        'nothing',
      ],
    },
    {
      name: 'coffee',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
      attributes: ['good', 'hot', 'cold', 'Penguins?'],
    },
  ])

  const [illiasThings, setIlliasThings] = useState([
    {
      name: 'truffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['truffy', 'shmaffy', 'mushroom', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [someoneElsesThings, setSomeoneElsesThings] = useState([
    {
      name: "dnd",
      image: "https://i.imgur.com/NicF3Yr.png",  
      attributes: ["dice", "monsters", "swords", "beautiful", "not a taco"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={karimsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={lukesThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={illiasThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={erinsThings} />}
      />
    </Routes>
  )
}

// this is a message

export default App
