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
        <div className='flex flex-col  bg-slate-600 min-h-screen'>


            {eventData.map(item => (
                <div className='flex' key={item.ID}>
                    <div key={item.ID} className='ml-10 first:mt-10 last:mb-10  '>
                        <img className='max-w-sm' src={urlFor(item.mainImage.asset._ref).url()} />

                    </div>

                    <div className='m-10'>

                        <h1 className='mb-2 text-color-khaki text-3xl font-light'>
                            {item.title}
                        </h1>
                        <h1 className='mb-2 text-color-khaki text-2xl font-extralight'>
                            Date: {item.TimeDate.slice(5, 10)} Time: {parseInt(item.TimeDate.slice(11, 16), 10) - 16}:00 pm
                        </h1>

                        <p className='text-white'>
                            {item.description}
                        </p>
                    </div>


                </div >
            ))}
        </div>
    )
}

export default events