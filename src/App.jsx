import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import dummy from './assets/dummy.png'
import Header from "./Header"
import Footer from "./Footer"
import './App.css'

import sdm_rendah from "./assets/cj/sdm-rendah.png"
import lingkup_jogja from "./assets/cj/lingkup-jogja.png"
import eklspanasi_opini from "./assets/cj/eksplanasi-opini.png"
import studi_kasus from "./assets/cj/studi-kasus.png"
import human_perspective from "./assets/cj/human-perspective.png"

import zodiak from "./assets/sms/zodiak.png"
import top_five_mahasiswa from "./assets/sms/top-five-mahasiswa.png"
import ucc from "./assets/sms/ucc.png"
import wawancara_mahasiswa from "./assets/sms/wawancara-mahasiswa.png"
import fun_post from "./assets/sms/fun-post.png"

function App() {
  const AnimatedDiv = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='bg-white/10 flex flex-col p-6 rounded-[10px] items-end justify-start gap-6 md:w-68 md:items-start lg:w-96'
  >
    {children}
  </motion.div>
);

  const sms = [
    {id: 1, img: zodiak, title: "Zodiak", text: "This segment presents information and characteristics of zodiac signs, linking them to the daily lives of students. It is intended to be light entertainment and to build a sense of relatability with our audience."},
    {id: 2, img: top_five_mahasiswa, title: "Top Five Mahasiswa", text: "This content presents five interesting facts or opinions that are relevant to student life. It is designed to provide content that is both entertaining, informative, and highly relatable to our audience."},
    {id: 3, img: ucc, title: "Unteyo Connect Cards", text: "This segment shares messages of encouragement and motivation with students, using the distinct visual design of our Unteyo Connect Cards game. Its purpose is to provide positive support and create awareness of our card game product."},
    {id: 4, img: wawancara_mahasiswa, title: "Wawancara Mahasiswa", text: "This segment offers a lighthearted and relatable interlude through questions about the unique life and daily problems of students. Its goal is to provide content that is both fun and easy for the audience to identify with."},
    {id: 5, img: fun_post, title: "Fun Post", text: "This segment presents humorous entertainment content aimed at providing a moment of relaxation and laughter. It is intended to offer a pleasant break from the daily routine for our student audience."},
  ]
  
  const cj = [
    {id: 1, img: sdm_rendah, title: "SDM Rendah", text: "This segment focuses on addressing the issue of low innovative capacity among students, exploring its root causes and offering practical solutions. We aim to spark a tangible improvement in students' human capital, providing them with the tools and mindset to innovate effectively."},
    {id: 2, img: lingkup_jogja, title: "Lingkup Jogja", text: "This segment presents interesting information and relevant facts about the city of Yogyakarta. Its goal is to provide useful local insights, enriching our student audience's knowledge of their surroundings in an engaging way."},
    {id: 3, img: eklspanasi_opini, title: "Eksplanasi & Opini", text: "This content offers critical analysis and in-depth editorial opinions on important issues that are highly relevant to and influential for students. It is designed to stimulate critical thinking and provide new, challenging perspectives."},
    {id: 4, img: studi_kasus, title: "Studi Kasus", text: "This segment shares valuable lessons from real student experiences, complete with the solutions they implemented to overcome various challenges. It aims to provide practical insights and inspiration for problem-solving within our student audience."},
    {id: 5, img: human_perspective, title: "The Human Perspective Story", text: "This segment shares emotional and motivational stories that resonate deeply with student life. Its purpose is to provide inspiration, foster empathy, and show students that they are not alone in facing their struggles."},
  ]

  return (
    <main className='font-[helvetica] bg-black text-[white] w-full h-full'>
      <Header/>
      <h1 className='text-2xl font-bold text-center pt-26 md:text-4xl'>Creative Media</h1>
      <section className='pt-12 p-6 md:pt-16'>
        <h2 className='text-xl font-bold text-center md:text-2xl'>Citizen Journalist</h2>
        <div className='p-8 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:justify-around'>
          {cj.map((item) => (
            <AnimatedDiv key={item.id} className=''>
              <div className='flex flex-col gap-6 justify-start'>
                <h3 className='font-semibold text-lg md:text-xl'>{item.title}</h3>
                <img src={item.img} className='w-full max-w-128 rounded-[5px]'></img>
              </div>
              <span className='text-sm md:text-base'>{item.text}</span>
            </AnimatedDiv>
          ))}
        </div>
      </section>
      <section className='pt-8 p-6 pt-12 md:pt-16'>
        <h2 className='text-xl font-bold text-center md:text-2xl'>Social Media Specialist</h2>
        <div className='p-8 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:justify-around '>
          {sms.map((item) => (
            <AnimatedDiv key={item.id} className=''>
              <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-lg md:text-xl'>{item.title}</h3>
                <img src={item.img} className='w-full max-w-128 rounded-[5px]'></img>
              </div>
              <span className='text-sm md:text-base'>{item.text}</span>
            </AnimatedDiv>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default App
