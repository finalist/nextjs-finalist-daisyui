import Image from 'next/image'
import logo from '@/app/assets/logo.svg'

export default function Home() {
  return (
    <main className='flex flex-col p-24 prose'>
      <div className='prose'>
        <Image src={logo} alt='logo' priority />
        <h1 className='mt-8'>Hello world!</h1>
        <div className='grid grid-cols-3 gap-4 h-56'>
          <div className='flex items-center justify-center bg-primary'>
            <span className='text-primary-content'>primary</span>
          </div>
          <div className='flex items-center justify-center bg-secondary'>
            <span className='text-secondary-content'>secondary</span>
          </div>
          <div className='flex items-center justify-center bg-white'></div>
          <div className='flex items-center justify-center bg-accent'>
            <span className='text-accent-content'>accent</span>
          </div>
          <div className='flex items-center justify-center bg-neutral'>
            <span className='text-neutral-content'>neutral</span>
          </div>
          <div className='flex items-center justify-center bg-white'></div>
          <div className='flex items-center justify-center bg-base-100'>
            <span className='text-base-100-content'>base-100</span>
          </div>
          <div className='flex items-center justify-center bg-base-200'>
            <span className='text-base-200-content'>base-200</span>
          </div>
          <div className='flex items-center justify-center bg-base-300'>
            <span className='text-base-300-content'>base-300</span>
          </div>
          <div className='flex items-center justify-center bg-gray-100'>
            <span className='text'>gray-100</span>
          </div>
          <div className='flex items-center justify-center bg-gray-200'>
            <span className='text'>gray-200</span>
          </div>
          <div className='flex items-center justify-center bg-gray-300'>
            <span className='text-gray-100'>gray-300</span>
          </div>
          <div className='flex items-center justify-center bg-gray-400'>
            <span className='text-gray-100'>gray-400</span>
          </div>
          <div className='flex items-center justify-center bg-gray-500'>
            <span className='text-gray-100'>gray-500</span>
          </div>
          <div className='flex items-center justify-center bg-gray-600'>
            <span className='text-gray-100'>gray-600</span>
          </div>
          <div className='flex items-center justify-center bg-gray-700'>
            <span className='text-gray-100'>gray-700</span>
          </div>
          <div className='flex items-center justify-center bg-gray-800'>
            <span className='text-gray-100'>gray-800</span>
          </div>
          <div className='flex items-center justify-center bg-gray-900'>
            <span className='text-gray-100'>gray-900</span>
          </div>
        </div>
      </div>
    </main>
  )
}
