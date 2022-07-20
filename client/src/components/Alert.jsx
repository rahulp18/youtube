import React,{useEffect} from 'react'
import styled from 'styled-components';

const Container=styled.div`
font-family: 'Inconsolata', monospace;
    padding: 15px 20px;
    color: white;
    border-radius: 30px 30px 30px 0px;
    position: absolute;
    top: -26px;
    right:120px;
    text-transform: uppercase;
    background:${props=>props.type=='error'?'#ef0808b5':props.type==='success'?'#0baa0b6b':"#efd208b5"}
    `;
    

const Text=styled.h4``;
const Wrapper=styled.div``;
const Alert = ({removeNotification,message,type}) => {
 

  useEffect(() => {
    const timeout=setTimeout(() => {
        removeNotification();
    }, 3000);
    return ()=> clearTimeout(timeout);
 }, [])
  return (
  <Container type={type} >
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  </Container>
  )
}

export default Alert