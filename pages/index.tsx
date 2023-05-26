import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';


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
    const { data: movies = [] } = useMovieList();
    const { data : favorites = []} = useFavorites();

    return (
      <>
        <Navbar />  
        <Billboard />
        <div className='pb-40'>
          <MovieList title="지금 뜨는 콘텐츠" data={movies}/>
          <MovieList title="내가 찜한 콘텐츠" data={favorites}/>
        </div>        
      </>
    )
  }
  