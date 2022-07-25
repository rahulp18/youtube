import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Card } from '../components'
import axios from 'axios'

const Contaier=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Home = ({type}) => {

    const[videos,setVideos]=useState([]);



    useEffect(() => {
      const fetchVideos = async ()=>{
       const res=await axios.get(`/videos/${type}`);
       setVideos(res.data);
      }
     fetchVideos();
    }, [type])
    
  

  return (
   <Contaier>
    {
      videos?.map((video)=>(
        <Card key={video._id} data={video}/>
      ))
    }
  
   </Contaier>
  )
}

export default Home