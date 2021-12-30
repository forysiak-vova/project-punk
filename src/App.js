import logo from './logo.svg';
import './App.css';
import user from './user.json'
import friends from './friends.json';
// import Profile from './components/Profile'
import ProfileList from './components/ProfileList';
import Section from './components/Section';
import FriendList from './components/FriendList';


 function App() {


  return (
   <div>
   
      <Section title='Акція дня'>
         <ProfileList items={user} />
        </Section>
        
        <FriendList items={friends}/>
      
   </div>
   

   
  )
}

export default App;
