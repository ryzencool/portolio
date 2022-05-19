import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
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
import Footer from './components/Footer';
function App() {

  const bg = useColorModeValue('rgb(240, 231, 219)', 'dark.900');


  return (
    <Flex bgColor={bg} minWidth={'100vw'} minHeight={'100vh'} flexDir={'column'} alignItems={'center'}>
      <AppBar />
      <Flex flex={1}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/work' element={<Work />} />
          {/* <Route path='post' element={<Post />} /> */}
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
