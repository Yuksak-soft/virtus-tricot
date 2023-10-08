import Navbar from '@/components/navbar/navbar';
import React from 'react';
import "./page.module.css"
import Banner from '@/components/banner/banner';
import Statistics from '@/components/statistics/statistics';
import Portfolio from '@/components/portfolio/portfolio';
import Advantage from '@/components/advantage/advantage';
import Clients from '@/components/clients/clients';
import Footer from '@/components/footer/footer';

interface PageProps { }

const Page: React.FC<PageProps> = () => {


  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Statistics />
      <Portfolio />
      <Advantage />
      <Clients />
      <Footer />
    </div>
  )

}

export default Page;