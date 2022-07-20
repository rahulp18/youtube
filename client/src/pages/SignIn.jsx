import React,{useState} from 'react'
import styled from 'styled-components'
import Alert from '../components/Alert';
 

const Container=styled.div`
   position:relative;
   height:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`;

const Wrapper=styled.div`
     background-color:${({theme})=>theme.bgLighter};
     color:${({theme})=>theme.text};
     padding:10px 20px;
     border:1px solid ${({theme})=>theme.soft};
     width:40%;
     margin-top:20px;
`;
const Title=styled.h3`
font-weight:500;
font-size:20px;
`;

const Button=styled.button`
padding: 10px 20px;
border: 2px solid red;
color: red;
border-radius: 5px;
font-size:16px;
background: transparent;
cursor: pointer;
font-weight: 600;
    &:hover{
      transition:all 0.3s ease-in;
      color:white;
      background:red;
    }
`;

const InputContainer=styled.form`
      margin-top:15px;
`;
const TextContainer=styled.div`
   border:1px solid ${({theme})=>theme.textSoft};
   margin:9px 2px;
`;
const TextFeild=styled.input`
    border:none;
    padding: 7px 20px;
    background: transparent;
    color:${({theme})=>theme.text};
    width:100%;
    font-size:14px;
`
const FlexContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;
`;
const Register=styled.h3`
font-size: 14px;
    font-weight: 200;
    color:#3ea6ff;
    cursor:pointer;
`;

const inititalState={
  username:'',
  email:'',
  password:'',
  confirmPassword:''
};

const SignIn = () => {
const [isSignup,setIsSignup]=useState(false);
const [userData, setUserData] = useState(inititalState);
const [notification,setNotification]=useState({show:false,message:'',type:''});
 

const showNotification=(show=false,message='',type='')=>{
   setNotification({show,message,type})
}
const removeNotification=()=>{
  showNotification(false,"","");
}
const handleSubmit=(e)=>{
 e.preventDefault();
 
 if(userData.password!==userData.confirmPassword && isSignup ){
  showNotification( true, 'Password mismatch', 'warnings');
  setUserData(inititalState);
 } else{
  showNotification( true, isSignup?"Sign Up Successfully":"SignIn successfully",'success');

 }
  
}

const chageForm=()=>{
  setIsSignup(prev=>!prev);
  setUserData(inititalState);
  showNotification( true, isSignup?"Welcome Back":"Register yourself",'warnings');
}

  return (
    <Container>
      {
        notification.show && <Alert removeNotification={removeNotification} {...notification} />
      }
      <Wrapper>
          <Title> {isSignup?'SignUp':'SignIn'} to explore</Title>
            <InputContainer onSubmit={handleSubmit} >
            {
              isSignup && (  <TextContainer>
                <TextFeild required placeholder='username' type='text' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
               </TextContainer>)
             }
             <TextContainer>
              <TextFeild required placeholder='email' type='email'  value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
             </TextContainer>
             <TextContainer>
              <TextFeild required placeholder='password' type='password'  value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
             </TextContainer>
             {
              isSignup && (  <TextContainer>
                <TextFeild required placeholder='confirm password' type='password' value={userData.confirmPassword} onChange={(e)=>setUserData({...userData,confirmPassword:e.target.value})} />
               </TextContainer>)
             }
           
            
            <FlexContainer>
              <Register onClick={()=>chageForm()} >{isSignup ? "already have an account ?SignIn" :"don't have an account? SignUp"} </Register>
             <Button> {isSignup?'SignUp':'SignIn'}</Button>
            </FlexContainer>
            </InputContainer>
      </Wrapper>
    </Container>
  )
}

export default SignIn