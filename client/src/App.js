import './App.css';
import DashBoard from './components/DashBoard';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux'
import store from './redux/store,';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <SignIn />
      </div>
    </Provider>

    
  );
}

export default App;
