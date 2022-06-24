import { logInWithGoogle } from "../../firebase/providers"
import { chekingData,logout,login } from "./"

export const checkingStatus = (email, password)=>{
    return async (dispatch)=>{

        dispatch( chekingData() )
    }
}

export const startGoogleSignIn = ()=>{
    return async (dispatch)=>{

        dispatch( chekingData() )

        const result = await logInWithGoogle()

        if(!result.ok) return dispatch(logout(result.errorMessage))
      
        dispatch(login( result ))
    }
}