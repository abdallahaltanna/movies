import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';

ReactDom.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
