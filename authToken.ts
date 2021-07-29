import axios from 'axios';
import { useContext } from 'react';
import { TokenContext } from './context/contextToken';

const setAuthToken = () => {
    const {token} = useContext(TokenContext);
    if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;