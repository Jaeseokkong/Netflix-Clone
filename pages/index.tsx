import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

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
    return (
      <>
        <h1 className="text-4xl text-green-500">Netfilx clone</h1>
        <button className='h-10 w-full bg-white' onClick={()=>signOut()}>로그아웃</button>
      </>
    )
  }
  