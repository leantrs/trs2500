import mock from '../utils/mock';


// mock.onPost('/api/home/login').reply(200,{

//      'id': 1,
//      'username': 'leantrs',
//      'email': 'leantrs@gmail.com' 
// });


mock.onPost('/api/home/login').reply((config) => {
    //  console.log(config);
      const {email,password} = JSON.parse(config.data);
   console.log(email,password);


      if((email !== 'leantrs@gmail.com') || (password !== 'admin')){
        
           return[400,{message: 'Seu email ou senha estão incorretos'}];
          
      }

      const user = {
         
          id: 1,
          name: 'Marcel Leandro',
          username: 'leantrs',
          email: 'leantrs@gmail.com',
          avatar: '/images/avatars/avatar_1.jpg'
      }

      return[200,{user}]

}
);