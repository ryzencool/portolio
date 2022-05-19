import React from 'react';
import { Box } from '@chakra-ui/layout';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Work from './pages/Work';
import Post from './pages/Post';
function App() {

  const bg = useColorModeValue('rgb(240, 231, 219)', 'dark.900');

  return (

    <Box bgColor={bg} width={'100vw'}>
      <AppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='work' element={<Work/>} />
        <Route path='post' element={<Post/>} />
      </Routes>
    </Box>
  );
}

export default App;
