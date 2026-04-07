import { useState } from 'react'
import './App.css'

const Card = ({ title, rating, isCool, actors }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>{rating}</h4>
      <blockquote>{isCool ? 'This movie is cool!' : 'This movie is not really that cool.'}</blockquote>

    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title='Star Wars' rating={5} isCool={true} actors={['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']} />
      <Card title="Avatar" rating={4} isCool={false} actors={['Sam Worthington', 'Zoe Saldana']} />
      <Card title="The Matrix" rating={4} isCool={false} actors={['Keanu Reeves', 'Laurence Fishburne']} />
    </div>)
}

export default App
