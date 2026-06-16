import logo from './logo.svg';
import './App.css';
import MyButton from './components/clickmebutton.js';
import Welcome from './components/welcome.js';
import Profile from './components/profile';

function App() {
  return (
    <div className="App"> 
  <Welcome />
  <Profile />
  <button className="btn">Follow Me</button>
</div>
  );
}

export default App;