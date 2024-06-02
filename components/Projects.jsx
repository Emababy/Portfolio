import Link from 'next/link';
import React from 'react';
import CarShopImg from '../public/assets/projects/carshop.png';
import DashBoardJs from '../public/assets/projects/Dashboard-js.png'
import DashboardNext from '../public/assets/projects/Dashboard-next.png'
import SecurityProject from '../public/assets/projects/security.png'
import ProjectItem from './ProjectItem';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Car Shop'
            backgroundImg={CarShopImg}
            projectUrl='/CarShop'
            tech='Next JS'
          />
          <ProjectItem
            title='Users Dashboard'
            backgroundImg={DashBoardJs}
            projectUrl='/UsersDashboard'
            tech='JS'

          />
          <ProjectItem
            title='Security Panel'
            backgroundImg={SecurityProject}
            projectUrl='/Security'
            tech='JS , Laravel'

          />
          <ProjectItem
            title='E-commerce Dashboard'
            backgroundImg={DashboardNext}
            projectUrl='/NextDashboard'
            tech='Next JS'

          />
        </div>
      </div>
      <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
    </div>
  );
};

export default Projects;
