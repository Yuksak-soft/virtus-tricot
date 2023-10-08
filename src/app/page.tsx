import Navbar from '@/components/navbar/navbar';
import React from 'react';
import "./page.module.css"
import Banner from '@/components/banner/banner';
import Statistics from '@/components/statistics/statistics';

interface PageProps { }

const Page: React.FC<PageProps> = () => {


  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Statistics />
    </div>
  )

}

export default Page;