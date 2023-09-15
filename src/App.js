import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
// import Signup from './component/Signup';
// import ChangePassword from './component/ChangePassword'
import Header from './component/Header';
//import Navbar from './component/home/Navbar';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
      <div className='HeaderComponent'>
        <Header />
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
