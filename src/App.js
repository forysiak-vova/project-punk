import logo from './logo.svg';
import './App.css';
import user from './user.json'
import Profile from './components/Profile'
console.log(user.avatar)

export default function App() {
  return (

      <Profile
  name={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
   
  )
}

// export default App;
