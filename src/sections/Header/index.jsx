import fileResume from '../../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

    return (
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%] h-[87vh]'>
        <div className='flex flex-col gap-2'>
            <div className='text-left text-3xl text-primaryTitle font-semibold'>Nawaporn Sooksawat</div>
            <div className='text-left text-primaryAccent font-semibold'>Software Developer · between jobs</div>
            <div className='text-left text-sm w-5/6'>From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.</div>
            <div className='text-left mt-2'>
                <a href={fileResume} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-white py-2 px-4' text-white>View Resume
                        <span className='rotate-90 inline-block ml-1 text-sm' >
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Header;