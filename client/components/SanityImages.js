import React from 'react';
import myConfiguredSanityClient from '../config/sanity'
import {urlFor} from '../config/sanity'
import imageUrlBuilder from '@sanity/image-url'


const SanityImages = ({image}) => {
    return (
        <div className=''>
            <img src={urlFor(image).url()}/>
        </div>
    );
}

export default SanityImages;
