import _ from 'lodash';
import './App.css';
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import store from '../store';


function App() {
  //Retrieve contacts list, user and activeUserId from Redux store
  //So they can be passed down as props to Sidebar and Main
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      {/*Give Sidebar an array of contacts*/}
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
