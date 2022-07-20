import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import {Link} from 'react-router-dom'


const Container=styled.div`
position:sticky;
top:0;
background-color:${({theme})=>theme.bgLighter};
height:56px;
`;

const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  height:100%;
  padding:0px 22px;
  position:relative;

`;

const Search=styled.div`
width:40%;
position:absolute;
left:0px;
right:0px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
border:1px solid #aaaaaa42;
border-radius:3px;
background-color:${({theme})=>theme.bg};
`;

const Input=styled.input`
border:none;
background-color:transparent;
outline:none;
color:${({theme})=>theme.text};
padding:5px;
width:100%
`;

const Button=styled.button`
  padding:5px 15px;
  background-color:transparent;
  border:1px solid #3ea6ff;
  color:#3ea6ff;
  border-radius:3px;
  font-weight:500;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:5px
`

const Box=styled.div`
background-color:${({theme})=>theme.bgLighter};
 color:${({theme})=>theme.textSoft};
 padding:5px 15px;
 cursor:pointer;
 &:hover{
  color:${({theme})=>theme.text};
  transition:color 0.3s ease-in;
 }
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <Box title='Search'>
          <SearchOutlinedIcon/>
          </Box>
        </Search>
          <Link to='signin' style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon/>
              SIGN IN
            </Button>
          </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar