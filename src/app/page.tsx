import Navbar from '@/components/navbar/navbar';
import React from 'react';
import "./page.module.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Banner from '@/components/banner/banner';
import Statistics from '@/components/statistics/statistics';
import Portfolio from '@/components/portfolio/portfolio';
import Advantage from '@/components/advantage/advantage';
import Clients from '@/components/clients/clients';
import Footer from '@/components/footer/footer';
import Location from '@/components/location/location';


config.autoAddCss = false;

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
      <Location />
      <Footer />
    </div>
  )

}

export default Page;