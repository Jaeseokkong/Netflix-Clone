import React from 'react';

interface MobileMenuProps {
    visible? : boolean;
}

const MobileMenu : React.FC<MobileMenuProps> = ({ visible }) => {
    if(!visible){
        return null;
    }

    return (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-4'>
                <div className='px-3 text-center text-white hover:underline'>
                    홈
                </div>
                <div className='px-3 text-center text-white hover:underline'>
                    시리즈
                </div>
                <div className='px-3 text-center text-white hover:underline'>
                    New!요즘 대세 콘텐츠
                </div>
                <div className='px-3 text-center text-white hover:underline'>
                    내가 찜한 콘텐츠
                </div>
                <div className='px-3 text-center text-white hover:underline'>
                    언어별로 찾아보기
                </div>
            </div>
        </div>
    )

}

export default MobileMenu;