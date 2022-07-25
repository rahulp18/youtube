import React from 'react';
import styled from 'styled-components';
import YLogo from '../assets/logo.png';
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import {Link} from 'react-router-dom'

const Container=styled.div`
  flex:1.2;
  background-color:${({theme})=>theme.bgLighter};
  height:100vh;
  color:${({theme})=>theme.text};
  font-size:14px;
  position:sticky;
  overflow-y: scroll;
  overflow-x: hidden;
  top:0;`

  const Wrapper=styled.div`
   
  `;

  const Logo=styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  padding:12px 0px;
  margin-bottom:10px;
  justify-content:center;
  position:sticky;
  top:0;
  z-index:100;
  background-color:${({theme})=>theme.bgLighter};
  `;

  const Text=styled.span`
  font-family: 'Akronim', cursive;
   color:{({theme})=>theme.text};
    font-size:25px;
    font-weight:500;
 
  `
  const Img=styled.img`
  height:25px;
  `;

  const Item=styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  cursor:pointer;
  padding:7.5px 26px;

  &:hover{
    background-color:${({theme})=>theme.soft};
  }
  `;

  const Hr=styled.hr`
  margin:15px 0px;
  border:0.5px solid ${({theme})=>theme.soft};
  `;

  const Login=styled.div`
  padding: 10px;
  `;
  const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
  const Title=styled.div`
  font-size:14px;
  font-weight:500;
  color:#aaaaaa;
  margin-bottom:20px;
  margin-left:9px;

  `;

const Sup=styled.sup`
    font-weight:500;
    color:${({theme})=>theme.textSoft};
    font-family: 'Bebas Neue', cursive;
    font-size:15px;
    letter-spacing:1px;
    margin-left:4px;
`
const Options=styled.div`
 
padding:20px 0px;
`


const Menu = ({darkMode,setDarkMode}) => {
  return (
  <Container>
     <Wrapper>
      <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
        <Logo>
          <Img src={YLogo} />
          <Text>YouTube<Sup>IN</Sup></Text>
        </Logo>
      </Link>
      <Options>
      <Link to='/' style={{textDecoration:'none',color:'inherit'}}>

      <Item>
        <HomeIcon/>
        Home
      </Item>
      </Link>
      <Link to='/trands' style={{textDecoration:'none',color:'inherit'}}>

      <Item>
        <ExploreOutlinedIcon/>
        Explore
      </Item>
      </Link>
      <Link to='/subscription' style={{textDecoration:'none',color:'inherit'}}>

      <Item>
        <SubscriptionsOutlinedIcon/>
        Subscriptions
      </Item>
      </Link>
      <Hr/>
      <Item>
        <VideoLibraryOutlinedIcon/>
        Library
      </Item>
      <Item>
        <HistoryOutlinedIcon/>
        History
      </Item>
      <Hr/>
      <Login>
        Sign in to like videos, comment ,and subscribe.
        <Link to='signin' style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlinedIcon/>
            SIGN IN
          </Button>
        </Link>
      </Login>
      <Hr/>
      <Title>BEST OF YOUTUBE</Title>
      <Item>
        <LibraryMusicOutlinedIcon/>
        Music
      </Item>
      <Item>
        <SportsBasketballOutlinedIcon/>
        Sports
      </Item>
      <Item>
        <SportsEsportsOutlinedIcon/>
        Gamming
      </Item>
      <Item>
        <MovieOutlinedIcon/>
        Movies
      </Item>
      <Item>
        <LiveTvOutlinedIcon/>
        Live
      </Item>
      <Hr/>
      <Item>
        <SettingsOutlinedIcon/>
        Settings
      </Item>
      <Item>
        <FlagOutlinedIcon/>
        Reports
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon/>
        Help
      </Item>
      <Item onClick={()=>setDarkMode(!darkMode)} >
        <SettingsBrightnessOutlinedIcon/>
        {darkMode?'Light':'Dark'} Mode
      </Item>
         
      </Options>
     </Wrapper>
  </Container>
  )
}

export default Menu