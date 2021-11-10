import authService from "../services/authServices";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';

const signIn = (email,password) => {

    return async (dispatch) => {

          const user =  await authService.SignIn(email,password);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user
            }
        })
    } 
}

export default signIn;