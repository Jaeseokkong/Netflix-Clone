import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }


    try {
        await serverAuth(req, res);

        //파일이름 [movieId] 로 쿼리를 가져오겠따
        const { movieId } = req.query;

        if(typeof movieId !== 'string'){
            throw new Error('잘못된 파라미터 입니다.');
        }

        if(!movieId){
            throw new Error("파라미터가 없습니다.")
        }

        const movie = await prisma.movie.findUnique({
            where : {
                id : movieId
            },
        })

        if(!movie) {
            throw new Error('해당 id로 존재하는 영화는 없습니다.')
        }

        return res.status(200).json(movie);



    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}