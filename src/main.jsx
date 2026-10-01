import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import './styles/tokens.css';

/*
  Provider передаёт хранилище вниз по дереву через контекст React,
  поэтому любой компонент получает доступ к нему хуками useSelector
  и useDispatch без передачи props через промежуточные уровни.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
