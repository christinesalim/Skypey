import _ from 'lodash';
import './App.css';
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import store from '../store';


function App() {
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
