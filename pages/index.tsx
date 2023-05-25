import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

import useCurrentUser from '@/hooks/userCurrentUser';

export async function getServerSideProps(context : NextPageContext){
  const session = await getSession(context)
  
  //세션이 존재하지 않는 경우
  if(!session) {
    return {
      redirect : {
        destination : '/auth',
        permanent : false,
      }
    }
  }

  return {
    props : {}
  }
}

export default function Home() {
    const { data : user } = useCurrentUser();

    return (
      <>
        
        <h1 className="text-4xl text-green-500">Netflix</h1>
        <p className='text-white'>Logged in as : {user?.email}</p>
        <button className='h-10 w-full bg-white' onClick={()=>signOut()}>로그아웃</button>
      </>
    )
  }
  