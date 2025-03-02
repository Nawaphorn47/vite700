import fileResume from '../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../contents/header';

const Header = () => {
    return (
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%] h-[87vh]'>
            <div className='flex flex-col gap-2'>
                <div className='text-left text-3xl text-primaryTitle font-semibold'>{data.name}</div>
                <div className='text-left text-primaryAccent font-semibold'>{data.title}</div>
                <div className='text-left text-sm w-5/6'>{data.caption}</div>
                <div className='text-left mt-2'>
                    <a href={data.link || fileResume} target='_blank' rel='noopener noreferrer'>
                        <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>
                            {data.btnText || 'View Resume'}
                            <span className='rotate-90 inline-block ml-1 text-sm'>
                                <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
