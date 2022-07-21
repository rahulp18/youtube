import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
 
import {Card,Comments} from '../components'
const Container=styled.div``;
const Wrapper=styled.div`
display:flex;
gap:15px;
`;
const VideoPlayer=styled.div`
  flex:7;

`;
const Content=styled.div`
 
`;
const Recomended=styled.div`
flex:2;
// border:2px solid red;
`;

const Title=styled.h1`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({theme})=>theme.text};
`;
const Details=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Info=styled.span`
 color:${({theme})=>theme.textSoft};
`;
const Buttons=styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.text};
`;
const Button=styled.div`
display:flex;
gap:20px;
align-items:center;
gap:5px;
cursor:pointer;
`;

const Hr=styled.hr`
 margin:15px 0px;
 border:0.5px solid ${({theme})=>theme.soft}; 
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

   




const Video = () => {
  return (
    <Container>
<Wrapper>
   <VideoPlayer>
    <Content>

   <iframe
            width="100%"
            height="600"
            title="YouTube video player"
            src='https://www.youtube.com/embed/leFEflp6hSo'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </Content>
    <Title>Arijit Songs</Title>
    <Details>
      <Info>7,948,154 views • July 20, 2022</Info>
      <Buttons>
        <Button>
          <ThumbUpOutlinedIcon/>123
        </Button>
        <Button>
          <ThumbDownOffAltOutlinedIcon/>DisLike
        </Button>
        <Button>
          <ReplyOutlinedIcon/>Share
        </Button>
        <Button>
          <AddTaskOutlinedIcon/>Save
        </Button>
      </Buttons>
    </Details>
    <Hr/>
    <Channel>
      <ChannelInfo>
        <Image src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' alt='channe_logo' />
        <ChannelDetail>
          <ChannelName>Rahul Pradhan</ChannelName>
          <ChannelCounter>2.31M subscribers</ChannelCounter>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis fugiat, iusto amet facere dicta quas minima voluptatibus aliquam in consectetur, nihil obcaecati laborum quis vero esse similique, sunt quaerat.

          </Description>
        </ChannelDetail>
      </ChannelInfo>
      <Subscribe>SUBSCRIBE</Subscribe>
    </Channel>
    <Hr/>
    <Comments/>
   </VideoPlayer>
   <Recomended>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
    <Card type='sm'/>
   </Recomended>
</Wrapper>
    </Container>
  )
}

export default Video;

