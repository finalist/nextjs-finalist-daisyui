import Image from 'next/image'
import logo from '@/app/assets/logo.svg'

export default function Home() {
  return (
    <main className='flex flex-col p-24 prose'>
      <div className='prose'>
        <Image src={logo} alt='logo' priority />
        <h1 className='mt-8'>Hello world!</h1>
        <div className='grid grid-cols-4 gap-4 h-56'>
          <div className='flex items-center justify-center bg-primary'>
            <span className='text-white'>primary</span>
          </div>
          <div className='flex items-center justify-center bg-secondary'>
            <span className='text-white'>secondary</span>
          </div>
          <div className='flex items-center justify-center bg-accent'>
            <span className='text-white'>accent</span>
          </div>
          <div className='flex items-center justify-center bg-neutral'>
            <span className='text-gray-800'>neutral</span>
          </div>
          <div className='flex items-center justify-center bg-base-100'>
            <span className='text'>base-100</span>
          </div>
          <div className='flex items-center justify-center bg-base-200'>
            <span className='text'>base-200</span>
          </div>
          <div className='flex items-center justify-center bg-base-300'>
            <span className='text'>base-300</span>
          </div>
        </div>
      </div>
    </main>
  )
}
