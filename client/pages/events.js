import React from 'react'
import {sanityClient} from '../config/sanity'



export const getServerSideProps = async () => {
    const query = '*[ _type == "event"]'
    const eventData = await sanityClient.fetch(query)

    if(!eventData.length){
        return {
            props: {
                eventData: [],
            },
        }
    } else{
        return {
            props: {
                eventData
            }
        }
    }
}


function events({eventData}) {
  console.log(eventData)
  return (
    <div>

        {eventData.map(a => (
            <ul key={a.ID}>

              {  a.description}
            </ul>
        ))}
    </div>
  )
}

export default events