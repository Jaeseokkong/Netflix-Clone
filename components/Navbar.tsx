import NavbarItem from './NavbarItem'
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsSearch , BsBell} from 'react-icons/bs'
import { useCallback, useState, useEffect } from 'react';

const TOP_OFFSET = 66;


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {   
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }else{
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll' , handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div className={`
                px-2
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                ${showBackground ? 'bg-zinc-900' : 'bg-opacity-90'}
            `}>
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo"/>
                <div className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                ">
                    <NavbarItem label="홈"/>
                    <NavbarItem label="시리즈"/>
                    <NavbarItem label="NEW!요즘 대세 콘텐츠"/>
                    <NavbarItem label="내가 찜한 콘텐츠"/>
                    <NavbarItem label="언어별로 찾아보기"/>
                </div>
                <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                    <p className='text-white text-sm'>메뉴</p>
                    <AiOutlineCaretDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className='flex flex-row ml-auto gap-7 items-center'>
                    <div className='text-gray-200 hover:text-gary-300 cursor-pointer transition'>
                        <BsSearch />
                    </div>
                    <div className='text-gray-200 hover:text-gary-300 cursor-pointer transition'>
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                            <img src="images/default-blue.png" alt=""/>
                        </div>
                        <AiOutlineCaretDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;