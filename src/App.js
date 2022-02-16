import {useState, useEffect} from 'react'
import './App.css';
import Maps from './components/Maps'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(()=>{
     const fetchEvents = async () =>{
       setloading(true)
       const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
       const {events} = await res.json()

       setEventData(events)
       setloading(false)
      }

     fetchEvents()
  }, [])



  return (
    <div className="App">
      
      {!loading ? <Maps eventData={eventData}/> : <h1>loading</h1> }
      
    </div>
  );
}

export default App;
