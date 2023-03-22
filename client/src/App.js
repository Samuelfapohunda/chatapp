import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/chat/Chat';
import { useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

// our server will run on port 4000, so we connect to it from here
const socket = io.connect('http://localhost:4000'); 


function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState(''); // Add this

  return (  
    <Router>
      <div className='App'>
        <Routes> 
          <Route
            path='/'
            element={
              <Home
                username={username} // Add this
                setUsername={setUsername} // Add this
                room={room} // Add this
                setRoom={setRoom} // Add this
                socket={socket} // Add this
              />

              
            }
          />

          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;