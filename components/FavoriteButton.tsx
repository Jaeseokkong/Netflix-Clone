import axios from 'axios';
import React, { useCallback , useMemo} from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'

import useCurrentUser from '@/hooks/userCurrentUser';
import useFavorites from '@/hooks/useFavorites';
import fetcher from '@/lib/fetcher';


interface FavoriteButtonProps {
    movieId : string;
}

const FavoriteButton : React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const { mutate: mutateFavorites } = useFavorites();

    const { data: currentUser, mutate } = useCurrentUser();
  
    const isFavorite = useMemo(() => {
      const list = currentUser?.favoriteIds || [];
  
      return list.includes(movieId);
    }, [currentUser, movieId]);
  
    const toggleFavorites = useCallback(async () => {
      let response;

        
      if (isFavorite) {
        response = await axios.delete('/api/favorite', { params : {movieId , test : 'test'} });

        //해당 data는 서버 측에서 값을 받을 수 없으므로 params로 대체
        //response = await axios.delete('/api/favorite', { data : {movieId} });

      } else {
        response = await axios.post('/api/favorite',  {  movieId });
      }
  
      const updatedFavoriteIds = response?.data?.favoriteIds;
  
      mutate({ 
        ...currentUser, 
        favoriteIds: updatedFavoriteIds,
      });
      mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
 
    return (
        <div onClick={toggleFavorites} className='
            cursor-pointer
            group/item
            w-6
            h-6
            lg:w-10
            lg:h-10
            border-white
            border-2
            rounded-full
            flex
            justify-center
            items-center
            transition
            hover:border-netural-300
        '>
            <Icon className='text-white' size={25}/>
        </div>
    )
}

export default FavoriteButton;