import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/images/github-icon.svg';
import LinkedinIcon from '../../../public/images/linkedin-icon.svg';

const Footer = () => {
  return (
    <footer
      id='contact'
      className='p-10 flex justify-around mt-10 footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-[#33353F] text-white'
    >
      <div className='flex flex-col text-slate-300'>
        <p className='mb-2'>
          <Link href='tel:+995599400471'>Tel: 599-400-471</Link>
        </p>
        <p>
          <Link href='mailto:kviatkovsky21@gmail.com'>
            Mail: kviatkovsky21@gmail.com
          </Link>
        </p>
      </div>

      <div className='socials flex flex-row gap-2 '>
        <Link href='https://github.com/Kviatkovski' target='_blank'>
          <Image
            className='transition ease-in-out hover:-translate-y-2'
            src={GithubIcon}
            alt='Github Icon'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/in/luka-kviatkovski-64b037242/'
          target='_blank'
        >
          <Image
            className='transition ease-in-out hover:-translate-y-2'
            src={LinkedinIcon}
            alt='Linkedin Icon'
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
