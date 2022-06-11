import Link from 'next/link'

const Navbar = () => {
    
    return (

        <div className='flex justify-center'>
      
                <Link href="/">
                    <a className='p-3'>Home</a>
                </Link>

                {/* <Link href="/events">
                    <a className='p-3'>Events</a>
                </Link> */}

                <Link href="/supportme">
                    <a className='p-3'>Donate</a>
                </Link>

        </div>

    );
}

export default Navbar;




