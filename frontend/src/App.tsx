import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Base from './layouts/Base';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base/>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
