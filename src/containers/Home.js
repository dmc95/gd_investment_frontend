import React from 'react'
import NewsCompagny from '../components/NewsCompagny'
import Top from '../components/Top'
import NewsCrypto from '../components/NewsCrypto'

const Home = () => {
  return (
    <section className='2xl:w-[3200px] h-[2200px] bg-slate-300 mx-auto'>
    <div className='pt-[250px]'>
        <div className='flex justify-evenly columns-2'>
            <NewsCompagny />
            <Top />
        </div>
        <div className='container'>
            <NewsCrypto />
        </div>
    </div>
    </section>
  )
}

export default Home