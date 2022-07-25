import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {format} from 'timeago.js'
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width:  ${(props) => (props.type === "sm" ? "80%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "110px" : "202px")};
  background-color: #999;
  flex: 1;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;





const Card = ({type,data}) => {

  const [channel,setChannel]=useState({});

  useEffect(() => {
       const fetchChennelData=async()=>{
        const res=await axios.get(`/user/find/${data.userId}`);
        setChannel(res.data);
       }
       fetchChennelData();
  }, [data.userId])
  
 
  const txt=data.desc;
  return (
     <Link to='/video/test' style={{textDecoration:"none"}} >
        <Container type={type}>
             <Image type={type} src={data.imgUrl?data.imgUrl:'https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg'} />
             <Details type={type}>
                <ChannelImage type={type} src={channel.img?channel.img:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738'} />
                <Texts>
                    <Title> {type==='sm'?`${txt.substring(0,10)}...`:`${txt.substring(0,50)}...`} </Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <Info>{data.views} views • {format(data.createdAt)} </Info>
                </Texts>
             </Details>
        </Container>
     </Link>
  )
}

export default Card