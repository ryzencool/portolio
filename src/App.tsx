import React from 'react';
import { Box } from '@chakra-ui/layout';
import AppBar from './components/AppBar';
import Home from './pages/Home';

function App() {
  return (
    <Box bgColor={'rgb(240, 231, 219)'}  width={'100vw'}>
      <AppBar/>
      <Home/>
    </Box>
  );
}

export default App;
