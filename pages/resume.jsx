import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ziad Embaby | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ziad Embaby</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ziad-embaby-26528527a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Emababy/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Penetration Testing <span className='px-1'>|</span> Web Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>Penetration Testing</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated Penetration Testing professional
          with experience in customer service,
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Penetration Testing
            <span className='px-2'>|</span>Web Development
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Laravel
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Linux
            <span className='px-2'>|</span> BurpSuite
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            HackerOne
            </span>
            <span className='px-2'>|</span>Freelance
          </p>
          <p className='py-1 italic'>Bug Bounty Hunter (May 2024 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Finding a bug or risk in the web application which is critical to report this issue to the companies
            </li>
            <li>
              Trying to find the risks associated with server side because its more critical than client side issues
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Ezz Steel Co.
            </span>
            <span className='px-2'>|</span>Internship
          </p>
          <p className='py-1 italic'>Backend Developer (June 2024 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Design a secure and lightweight backend methods that will work securely with high availability and performance.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Implement and design the database to make sure that everything works properly and securely,
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Code Soft
            </span>
            <span className='px-2'>|</span>Internship
          </p>
          <p className='py-1 italic'>Full Stack Developer (AUG 2023 - NOV 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Implement and design the database and the backend. 
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              AK Callers | Remotely
            </span>
            <span className='px-2'>|</span>Chicago, Illinois
          </p>
          <p className='py-1 italic'>Real Estate Agent (Feb 2024 - Current)</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              ACES Contact Center | Remotely
            </span>
            <span className='px-2'>|</span>Sheridan, Wyoming
          </p>
          <p className='py-1 italic'>Senior Sales Agent (DEC 2022 - OCT 2023)</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              CNS Marketing Solutions | On Site
            </span>
            <span className='px-2'>|</span>Nasr City , Cairo
          </p>
          <p className='py-1 italic'>Senior Sales Agent (Sep 2022 - Dec 2022)</p>
        </div>
      
      </div>
    </>
  );
};

export default resume;
