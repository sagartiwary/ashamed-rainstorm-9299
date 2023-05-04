
import React from 'react'
import { Banner } from '../Common/Banner'
import { AllDoctors } from '../Common/AllDoctors'
import { TopDoctors } from '../Common/TopDoctors'
import { MySlider } from '../Common/MySlider'
import { ArticleDoctor } from '../Common/ArticleDoctor'
import { BottomCrousel } from '../Common/BottomCrousel'


export const Home = () => {
  return (
    <>
   <Banner/>
   <br/>
   <br/>
   <AllDoctors/>
   <TopDoctors/>
   <MySlider/>
   <ArticleDoctor/>
   <BottomCrousel/>
   <hr/>
    </>
  )
}
