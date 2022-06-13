import Link from 'next/link'
import Image from 'next/image'
import church from '../assets/church.png'

const Navbar = () => {

    return (

        <div className='flex justify-around items-center bg-color-navy'>

            <div className='flex justify-start'>

                <Link href="/">
                    <Image
                        className='cursor-pointer'
                        src={church}
                        alt="Church Logo"
                        width="200px"
                        height="100px"
                    />
                </Link>

            </div>

            <div classname=''>

                <Link href="/">
                    <a className='p-3 text-white text-2xl font-extralight hover:text-color-salmon'>Home</a>
                </Link>

                {/* <Link href="/events">
                    <a className='p-3 text-white text-2xl font-extralight hover:font-semibold'>Events</a>
                </Link> */}

                <Link href="/supportme">
                    <a className='p-3 text-white text-2xl font-extralight hover:text-color-salmon'>Donate</a>
                </Link>
            </div>


        </div>

    );
}

export default Navbar;




