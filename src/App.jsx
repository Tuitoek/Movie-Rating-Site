import { useEffect, useState } from 'react'
import './App.css'

const hasLiked = true;
const Card = ({ title, rating, actors }) => {


  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleCardClick = () => {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  });

  return (
    <div className="card" onClick={handleCardClick}>
      <h3>{title} <br />{count}</h3>


      {/* <blockquote>{isCool ? 'This movie is cool!' : 'This movie is not really that cool.'}</blockquote> */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>


    </div>
  )
}

const App = () => {


  return (
    <div className='card-container' >
      <Card title='Star Wars' rating={5} actors={['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']} />
      <Card title="Avatar" rating={4} actors={['Sam Worthington', 'Zoe Saldana']} />
      <Card title="The Matrix" rating={4} actors={['Keanu Reeves', 'Laurence Fishburne']} hasLiked={hasLiked} />
    </div>)
}

export default App
