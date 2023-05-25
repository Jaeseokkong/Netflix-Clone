import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';

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
        <Navbar />  
        <Billboard />
      </>
    )
  }
  