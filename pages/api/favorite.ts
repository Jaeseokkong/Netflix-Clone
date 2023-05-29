import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);

      const { movieId } = req.body;
  
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });
  
      if (!existingMovie) {
        throw new Error('Invalid ID');
      }
  
      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: {
            push: movieId
          }
        }
      });
  
      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      

      const { currentUser } = await serverAuth(req, res);


      const { movieId } = req.query
    
      //const { movieId } = req.body;
      console.log(req.query)
      console.log(movieId)
      
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId?.toString()
        }
      });

      if (!existingMovie) {
        throw new Error('Invalid ID');
      }

      if(movieId !== undefined){
        const updatedFavoriteIds = without(currentUser.favoriteIds, movieId.toString());

        const updatedUser = await prismadb.user.update({
          where: {
            email: currentUser.email || '',
          },
          data: {
            favoriteIds: updatedFavoriteIds,
          }
        });
        
        return res.status(200).json(updatedUser);

      }else{
        return res.status(405).end();

      }
      

    

    }
    
    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}

