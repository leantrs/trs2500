import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';


const useStyles = makeStyles((theme)=>({

      root: {


      }

}));

const posts = [
    { 
        id: 1,
        author: {
                  id: 1,
                  name: 'Marcel Leandro',
                  username: 'leantrs',
                  avatar: '/images/avatars/avatar_1.jpg'
                },
         title: 'Criando um app do zero usando o React.js',
         date: 'April 7, 2020',
         description: 'Fala pessoal! Qual o framework preferido de vcs?',
         hashtags: 'dotnet, #javascript,#react,#developer',
         image: '/images/posts/post8.png'
      }, 
      { 
        id: 2,
        author: {
                  id: 1,
                  name: 'Marcel Leandro',
                  username: 'leantrs',
                  avatar: '/images/avatars/avatar_1.jpg'
                },
         title: 'Comprativo entre react e vue.js p- perfomace',
         date: 'April 7, 2020',
         description: 'Quero criar um bootcamp gratuito para passar um pouco',
         hashtags: 'dotnet, #javascript, #react,#developer',
         image: '/images/posts/post9.png'
      },
        
];


function Feed(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
        {
            posts.map(post => (
                <PostCard key={post.id} post = {post}/>
            ))
        
        }
        </div>
    );
}

export default Feed;