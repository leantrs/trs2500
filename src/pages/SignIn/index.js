import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlined  from '@material-ui/icons/LockOpenOutlined';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import Link  from '@material-ui/core/Link';
//import authService from '../../services/authServices';
import {  useNavigate } from 'react-router';
import  FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';
import signIn from '../../actions/accountActions';




// inicio CSS
const useStyles = makeStyles((theme) =>({
       root: {
      
            height: '100vh'
       },
       image: {
           backgroundImage: 'url(/images/background.jpg)',
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'none',
           padding: theme.spacing(2),
           textAlign: 'center'
       },

       avatar: {
         background: theme.palette.primary.main,
         marginBottom: theme.spacing(1),
       },

       button: {
         marginTop: theme.spacing(1),
       },

       form: {
           margin: theme.spacing(2,4)
       },
       link: {
         marginTop: theme.spacing(1)
       }
   

}));

// fim CSS


function Copyright(){
   return(
     <Typography
          variant="body2"
                 align = "center"
     >
        {/* {'Copyright ' }
        <a color="inherit" href="https://youtube.com">Marcel Leandro</a>{''}
        {new Date().getFullYear} */}

     </Typography>
   );
}

function SignIn(){

   
// declaracao de variaveis

    const classes = useStyles();
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState();
    //const account =  useSelector(state => state);
    const dispatch = useDispatch();



    async function handleSignIn(){

   try{

      await dispatch(signIn(email,password));
   
                             navigate('/');

      
   }catch(error){
     setErrorMessage(error.response.data.message);       
    
   }
  
   
 }

    return(

        <Grid container className={classes.root}>
           <Grid 
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            md={7}
            className={classes.image}
            >
              <Typography style={{color:'#fff', fontSize: 25, lineHeight:'45px'}}>
                      <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
              </Typography>

              <Typography variant="body2" style={{ color: 'rgb(255,255,255,0.7)', marginTop:30,fontSize:15, lineHeight:'30px' }}>
                  Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software
              </Typography>
           </Grid>

           <Grid item md={5}>
             <Box display="flex" flexDirection="column" alignItems="center" m={8}>
               <Avatar className={classes.avatar}> 
                  <LockOutlined/>
               </Avatar>
               <Typography variant="h5">
                 Acesso
               </Typography>
               <form className={classes.form}>
                 <TextField
                    variant="outlined"
                    margin = "normal"
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                 />
                 <TextField
                    variant="outlined"
                    margin = "normal"
                    required
                    fullWidth
                    name="password"
                    label="senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                   
                 />
                 <Button
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.button}
                     onClick = {handleSignIn}
                 >
                      Entrar
                 </Button>

                 {
                   errorMessage &&
                   <FormHelperText error> 
                       {errorMessage}

                   </FormHelperText>
                 }
                 <Grid container className={classes.link}>
                      <Grid item>
                         <Link >Esqueceu a sua senha?</Link>
                      </Grid>
                      <Grid item>
                         <Link> Nao tem uma conta? Registre-se</Link>
                      </Grid>
                 </Grid>
               </form>
                 <Copyright/>

             </Box>

           </Grid>

        </Grid>      
        
    );
}

export default SignIn;