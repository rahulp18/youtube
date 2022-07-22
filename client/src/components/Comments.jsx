import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SortIcon from '@mui/icons-material/Sort';
const Container=styled.div``;

const NewComments=styled.div`
  display:flex;
  align-items:center;
  gap:2px;
`;
const Avatar=styled.img`
height:40px;
width:40px;
border-radius:50%;
object-fit:cover;
`;

const Input=styled.input`
width:100%;
border:none;
outline:none;
color:${({theme})=>theme.text};
background:transparent;
border-bottom:1px solid ${({theme})=>theme.textSoft};
font-size: 14px;
font-size: 14px;

`;

const CommentBox=styled.div`
width: 100%;
padding: 10px 12px;
`;

const Actions=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Buttons=styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;
 
const Button=styled.button`
   margin-top: 4px;
    padding: 7px 9px;
    border-radius: 3px;
    border: none;
    background:${(props)=>props.type==='fill'?'#3ea6ff':'transparent'};
    color:${(props)=>props.type==='fill'?'white':'black'};
    text-transform: uppercase;
    font-weight: 600;
    cursor:pointer;
`;
const Terms=styled.p`
line-height: 1.8rem;
font-weight: 400;
 
font-size: 13px;
display: flex;
align-items: center;
gap: 5px;
color:${({theme})=>theme.textSoft};
`;
const Span=styled.span`
color:#3ea6ff;
`
const Header=styled.div`
display: flex;
align-items: center;
gap: 15px;
font-size: 16px;
color:${({theme})=>theme.text};
`;
const Count=styled.h2`
font-size: 17px;
`;
const Sort=styled.div`
display: flex;
align-items: center;
font-weight: 600;
text-transform: uppercase;
`;
const Comments = () => {
 
  return (
    <Container>
      <Header>
        <Count>2,110 Comments</Count>
        <Sort> <SortIcon/> Sort By</Sort>
      </Header>
      <NewComments>
        <Avatar src='data:image/jpeg;base64,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' alt='avt' />
        <CommentBox>
         <Input placeholder='Commenting publicy as Rahul Pradhan' />
          <Actions>
      <Terms> 
        <TagFacesIcon />By completing this action you are creating a <Span>channel</Span>​ and agree to <Span>YouTube's Terms of Service.</Span> 
      </Terms>
      <Buttons>
        <Button type='outline' >
          Cancel
        </Button>
        <Button type='fill'>
          Comment
        </Button>
      </Buttons>
          </Actions>
        </CommentBox>
      </NewComments>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments