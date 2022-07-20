import React,{useState} from 'react'
import styled,{ThemeProvider} from 'styled-components'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import { Menu, Navbar } from './components';
import { Home, SignIn, Video } from './pages';
import {darkTheme,lightTheme} from './utils/Theme'
const Container =styled.div`
  display:flex;
`;
const Main=styled.div`
flex:7;
background-color:${({theme})=>theme.bg};
`;
const Wrapper=styled.div`
padding:22px 50px;
`;



const App = () => {
  const [darkMode,setDarkMode]=useState(true);
  return (
<ThemeProvider theme={darkMode ?darkTheme:lightTheme}>
<Container>
    <Router>
     <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main>
       <Navbar/>
        <Wrapper>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='signin' element={<SignIn/>} />
            <Route path='video'>
              <Route path=':id' element={<Video/>}/>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
    </Router>
  </Container>
</ThemeProvider>
  )
}

export default App