import axios from 'axios';

export default function fetchUsers (){
  return{
    type:'FETCH_USERS',
    payload:axios.get('https://randomuser.me/api/?results=4')
  };
}
