import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { footerLinks } from '../utils/data';
import { Link } from 'react-router-dom'
import TextInput from './TextInput';
import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <footer className='text-white mt-20 '>
      <div className='overflow-x-hidden -mb-0.5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d4ed8" d="M0,288L30,245.3C60,203,120,117,180,101.3C240,85,300,139,360,176C420,213,480,235,540,234.7C600,235,660,213,720,181.3C780,149,840,107,900,90.7C960,75,1020,85,1080,117.3C1140,149,1200,203,1260,208C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>

      <div className='bg-[#1d4ed8]  '>
        <div className='container px-5 py-20 mx-auto'>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4'>
            {footerLinks.map(({ id, title, links }) => (
              <div className='w-auto px-4' key={id}>
                <h2 className='font-medium text-white tracking-widest text-sm mb-3 '>{title}</h2>
                <div className='mb-10 flex flex-col gap-3'>
                  {
                    links.map((link, indexedDB) => (
                      <Link to="/" key={indexedDB} className='text-gray-300 text-sm hover:text-white'>
                        {link}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className=''>
          <p className='container px-5 mx-auto text-white mt-2'>
            Subscribe to Our Newsletter
          </p>

          <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between'>
            <div className='w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start'>
              <TextInput 
                styles='w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2' 
                type='email'
                placeholder='Email Address'
              />

              <CustomButton 
                title='Subscribe' 
                containerStyles='block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col tems-center mt-2'
              />

            </div>
              <span
                className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'
              >
                <a href="" 
                  className='text-white text-xl hover:scale-125 ease-in-out duration-300'
                >
                  <FaTwitter/>
                </a>
                <a href="" 
                  className='ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300'
                >
                  <FaLinkedinIn />
                </a>
                <a href="" 
                  className='ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300'
                >
                  <FiInstagram />
                </a>
                <a href="" 
                  className='ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300'
                >
                  <FaFacebookF />
                </a>
              </span>
          </div>
        </div>

        <div className='bg-[#001a36]'>
          <div
            className='container mx-auto px-5 py-4 flex flex-wrap flex-col sm:flex-row'
          >
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2024 Job Finder App. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer