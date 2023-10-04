import { Sidebar} from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {BiBuoy} from 'react-icons/bi'
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
            window.addEventListener('scroll', handleScroll)
            
            return () => {
               window.addEventListener('scroll', handleScroll);
        }
    });

    return(
      <div className='text-white'>
        {/* Large medium devices */}
        <div className='md:hidden w-screen flex items-center justify-around py-4'>
            <div className='flex'>
                <div className=' w-16 px-4'>
                <img src={require('../assets/img/profile-picture.jpeg')} className='shadow-lg rounded-full max-w-full h-auto align-middle border-none'/>
                </div>
            </div>
            <div className='flex'>
                <h2 className='mx-10'>All Albums</h2>
                <h2>Genre</h2>
            </div>
        </div>

        {/* Large phone devices */}
        <div className='hidden md:block h-screen'>
          <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="#"
                  icon={HiChartPie}
                >
                  <p>
                    Dashboard
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiViewBoards}
                >
                  <p>
                    Kanban
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiInbox}
                >
                  <p>
                    Inbox
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiUser}
                >
                  <p>
                    Users
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiShoppingBag}
                >
                  <p>
                    Products
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiArrowSmRight}
                >
                  <p>
                    Sign In
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiTable}
                >
                  <p>
                    Sign Up
                  </p>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="#"
                  icon={HiChartPie}
                >
                  <p>
                    Upgrade to Pro
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiViewBoards}
                >
                  <p>
                    Documentation
                  </p>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={BiBuoy}
                >
                  <p>
                    Help
                  </p>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
    </div>
    )
}