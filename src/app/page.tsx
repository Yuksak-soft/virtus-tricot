import Navbar from '@/components/navbar/navbar';
import React from 'react';
import "./page.module.css"
import Banner from '@/components/banner/banner';
import Statistics from '@/components/statistics/statistics';
import Portfolio from '@/components/portfolio/portfolio';
import Advantage from '@/components/advantage/advantage';

interface PageProps { }

const Page: React.FC<PageProps> = () => {


  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Statistics />
      <Portfolio />
      <Advantage />
    </div>
  )

}

export default Page;