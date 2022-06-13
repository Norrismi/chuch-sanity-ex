import Link from 'next/link'
import Image from 'next/image'
import bibleSun from '../assets/bibleSun.jpeg'
import bibleTable from '../assets/bibleTable.jpeg'
import brothers from '../assets/brothers.jpeg'
import cross from '../assets/cross.jpeg'
import pray from '../assets/pray.jpeg'
import VideoIntro from '../components/VideoIntro'





export default function Home() {

  return (
    <div className='flex flex-wrap justify-center items-center p-10 w-8/12 m-auto'>
      {/* <VideoIntro/> */}

      <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 ">
        <Image className="w-full" src={pray} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">New Member</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
        <Image className="w-full" src={cross} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Youth</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>


      <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
        <Image className="w-full" src={bibleSun} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sermons</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>


      <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
        <Image className="w-full" src={brothers} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Events</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>










     </div>
  )
}
