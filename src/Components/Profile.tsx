import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Profile = () => {
  const { userName } = useContext(LoginContext)

  return (
    <>
      <div className='profileContainer' >
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/hello-9216096-7502398.png" alt="" />
      <h2> {userName}</h2>
      </div>
    </>
  )
}

export default Profile
