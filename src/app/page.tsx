import Image from 'next/image'
import logo from '@/app/assets/logo.svg'

export default function Home() {
  return (
    <main className='p-24 flex flex-col gap-8 prose'>
      <Image src={logo} alt='logo' priority />
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
      <div className='mt-16 flex flex-col gap-8 space-y-0'>
        <h1 className=''>Display 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis
          molestie diam, nec hendrerit lorem convallis ac. Curabitur urna enim,
          hendrerit eu ultrices blandit, cursus eu lectus. Nullam rhoncus, ipsum
          sit amet gravida lobortis, elit magna rhoncus nisl, eget hendrerit
          lorem erat ut urna. Vestibulum id nulla sed sapien imperdiet lobortis.
          Phasellus bibendum luctus consectetur. Suspendisse efficitur lacus
          eget lobortis ultrices. Sed lobortis in nisi eu elementum. Quisque et
          leo non lacus rhoncus volutpat.
        </p>
        <h2 className=''>Display 2</h2>
        <p>
          Nam at mi ut velit molestie vulputate. Aliquam a sodales leo, quis
          pulvinar erat. Suspendisse quis lectus sit amet felis venenatis
          efficitur sed nec nibh. Curabitur sit amet sagittis nibh. Curabitur
          quis tellus eget turpis aliquam pulvinar. Donec dapibus dui sapien, in
          facilisis mi molestie et. Phasellus vitae lacinia est. Proin tempus
          lacinia turpis, elementum rhoncus est tempus ut. Mauris tincidunt
          augue a sapien pharetra, vel vehicula est euismod. Nam finibus sapien
          a ultrices maximus. Nunc posuere tortor fringilla tellus ornare
          imperdiet. Integer lobortis neque felis. Etiam at gravida elit.
        </p>
        <h3 className=''>Display 3</h3>
        <p>
          Quisque commodo urna ullamcorper vulputate fringilla. Cras lectus
          lectus, volutpat at sapien vitae, aliquet mollis lorem. Nunc augue
          nisi, aliquet cursus augue sit amet, dictum ultricies nisi. Aliquam
          erat volutpat. Fusce facilisis diam vel consectetur molestie. Praesent
          ut faucibus sem, a fermentum ligula. Nullam eget justo ac enim tempus
          aliquet id in orci. Phasellus suscipit nec tellus eget imperdiet.
        </p>
        <h4 className=''>Display 4</h4>
        <p>
          Aliquam erat volutpat. Proin libero libero, varius sed libero quis,
          pellentesque feugiat diam. Vivamus vehicula accumsan lectus. Maecenas
          vulputate odio quis elit tempor hendrerit. Morbi iaculis sed arcu in
          sagittis. Nam et accumsan diam. Duis porttitor justo et nulla finibus
          tempor. Nam at orci eget justo tincidunt egestas eu id neque. Proin in
          lobortis augue. Vivamus sit amet risus eget odio venenatis rhoncus nec
          id leo. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nullam eu luctus lectus, a scelerisque nisi.
        </p>
        <h5 className=''>Display 5</h5>
        <p>
          Vivamus eleifend justo eget ultrices gravida. Nunc porta eros vel quam
          tincidunt vulputate. Nulla ac malesuada arcu, ut lobortis mi. Etiam
          porta lacus ac augue tincidunt finibus. Mauris id bibendum ligula,
          vitae malesuada enim. Quisque dui nisi, rhoncus pretium varius at,
          consequat in ligula. Pellentesque malesuada vitae nisl sed dignissim.
          Sed nulla enim, sagittis eu ultricies quis, pellentesque et dui.
          Vestibulum blandit accumsan nisi id convallis. Vivamus urna mi, semper
          sed dolor non, consequat gravida nunc. Proin eu ligula scelerisque
          metus vestibulum eleifend quis ut sapien. Maecenas volutpat nisi orci,
          a aliquam est porta vel.
        </p>
        <h6 className=''>Display 6</h6>
        <p>
          In hendrerit magna vitae nisl sodales pellentesque a ut ex. Aenean
          lacinia enim a libero auctor pulvinar. Donec in sapien id nibh
          pharetra suscipit. Cras in metus consectetur, scelerisque est a,
          maximus diam. Nulla at pharetra leo. Aliquam non velit tempus, aliquet
          nulla non, aliquet nulla. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque interdum orci eu dolor lobortis, non
          efficitur neque volutpat. Suspendisse potenti. In non feugiat ligula,
          ullamcorper vestibulum sapien.
        </p>
      </div>
    </main>
  )
}
