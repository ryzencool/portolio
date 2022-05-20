import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  Routes,
  Route,
} from "react-router-dom";
import Work from './pages/Work';
import Footer from './components/Footer';
import Blog from "./pages/Blog";
function App() {

  const bg = useColorModeValue('rgb(240, 231, 219)', 'dark.900');


  return (
    <Flex bgColor={bg} width={'100%'} minHeight={'100vh'} flexDir={'column'} alignItems={'center'} className={'aaa'}>
      <AppBar />
      <Flex flex={1} width={'30%'}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/work' element={<Work />} />
           <Route path='/blog' element={<Blog />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
