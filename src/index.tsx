import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppRouter} from './app_router.tsx';

function App() {
  return (
    <>
			<CssBaseline />
      <AppRouter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
