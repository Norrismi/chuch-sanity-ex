import React from 'react'
import SanityImages from '../../components/SanityImages'
import { sanityClient } from '../../config/sanity'


const Event = ({ title, description, TimeDate, mainImage, ID }) => {
  return (
    <>
    <p>{/* <div>{picture[0]}</div> */}</p>
    <SanityImages image={mainImage}/>
    <h1>{title}</h1>
    <div>{description}</div>
    <div>{TimeDate}</div>
    <div>{ID}</div>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == "event" && slug.current == $pageSlug][0]{
    title,
    description,
    TimeDate,
    mainImage,
    ID
  }`

  const event = await sanityClient.fetch(query, { pageSlug })

  if (!event) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: event.title,
        description: event.description,
        TimeDate: event.TimeDate,
        mainImage: event.mainImage,
        ID: event.ID
      }
    }
  }

}



export default Event


