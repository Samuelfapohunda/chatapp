import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate()


  const joinRoom =() => {
   if(room !== '' && username !== '') {
    socket.emit('join_room', {username, room} )
   }

   //Redirect to chat
   navigate('/chat', {replace: true});
  };
  
  return (
    <div className='join-container'>


 <header>
 <h1>ChatApp</h1>
 </header>
 <div className='main'>
    <form className="chat.html">
    <div classname ="form-control">
        <label for="username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..."
            required
        />
    </div>
    <div classname="form-control">
        <label for="room">Room</label>
        <select name="room" className='select' id="room" onChange={(e) => setRoom(e.target.value)}>
        <option>-- Select Room --</option>
          <option value='Room 1'>Room 1</option>
          <option value='Room 2'>Room 2</option>
          <option value='Room 3'>Room 3</option>
          <option value='Room 4'>Room 4</option>
        </select>
    </div>

    <button type="submit" className="btn" onClick={joinRoom}>Join Chat</button>
				</form>

    </div>
    
    </div>
  );
};

export default Home;