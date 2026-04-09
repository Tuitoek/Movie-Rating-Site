import { useEffect, useState } from 'react'
import './App.css'

const hasLiked = true;
const Card = ({ title, rating, actors }) => {

  // Initialize state for heart like
  const [hasLiked, setHasLiked] = useState(false);

  // Initialize state for click count
  const [count, setCount] = useState(0);

  // Handle the click event on the card
  const handleCardClick = () => {

    setCount((prevCount) => prevCount + 1);
  }

  // Handle the click event on the heart button
  const handleHeartClick = (e) => {
    // This prevents 'handleCardClick' from ever seeing this event
    e.stopPropagation();

    setHasLiked(!hasLiked);
  };

  // Hook that runs after every render, logging the current like status
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  });

  return (
    <div className="card" onClick={handleCardClick}>
      <h3>{title}</h3>

      <p className='click'>Clicks: {count}</p>
      {/* <blockquote>{isCool ? 'This movie is cool!' : 'This movie is not really that cool.'}</blockquote> */}

      <button onClick={handleHeartClick}>
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
