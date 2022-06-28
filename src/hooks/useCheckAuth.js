import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startGetNotes } from '../store/journal';



 const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( firebaseAuth, async( user ) => {
        if ( !user ) return dispatch( logout() );

        const { uid, email, displayName, photoURL } = user;
        dispatch( login({ uid, email, displayName, photoURL }) );
        dispatch(startGetNotes());
        
        })
    }, []);

    return status;
}

export default useCheckAuth