import React, { useState, useEffect } from 'react'
import axios from 'axios';
const ReadUser = ({token}) => {
const [userData, setUserData] = useState(null)
const [isLoading, setIsLoading]= useState(true)
useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user", {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });
        setUserData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserData();
  }, [token]);
    
  return isLoading ? (<span>en chargement</span>):(
      <div className='flex flex-col justify-evenly items-center w-full h-[300px]'>
        <h2 className='font-semibold text-lg'>Vos Informations utilisateur</h2>
        <p>Votre nom d'utilisateur: {userData.username}</p>
        <p>Votre Email: {userData.email}</p>
    </div>
  )
}

export default ReadUser