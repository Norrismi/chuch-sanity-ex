import React from 'react'
import { sanityClient } from '../config/sanity'
import { urlFor } from '../config/sanity'
import SanityImages from '../components/SanityImages'




export const getServerSideProps = async () => {
    const query = '*[ _type == "event"]'
    const eventData = await sanityClient.fetch(query)
 
    if (!eventData.length) {
        return {
            props: {
                eventData: [],
            },
        }
    } else {
        return {
            props: {
                eventData
            }
        }
    }
}


function events({ eventData }) {
    console.log(eventData)
    return (
        <div className='flex flex-col place-items-center'>


            {eventData.map(item => (
                <div className='mb-10' key={item.ID}>
                    {/* <div key={item.ID}>

                        <SanityImages image={item.picture} />

                        {console.log(item.picture)}
                    </div> */}
                    <h1 className='mb-2 text-color-salmon text-3xl font-light'>
                        {item.title}
                    </h1>
                    <h1 className='mb-2 text-color-salmon text-2xl font-extralight'>
                        Date: {item.TimeDate.slice(5, 10)} Time: {parseInt(item.TimeDate.slice(11, 16), 10) - 16}:00 pm
                    </h1>

                    <p>
                        {item.description}
                    </p>


                </div >
            ))}
        </div>
    )
}

export default events