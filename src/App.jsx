import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import dummy from './assets/dummy.png'
import Header from "./Header"
import Footer from "./Footer"
import './App.css'

function App() {
  const AnimatedDiv = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='bg-white/10 flex flex-col p-6 px-4 rounded-[5px] items-end justify-between gap-6'
  >
    {children}
  </motion.div>
);

  const sms = [
    {id: 1, img: dummy, title: "Zodiak", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 2, img: dummy, title: "Top Five Mahasiswa", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 3, img: dummy, title: "Unteyo Connect Cards", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 4, img: dummy, title: "Wawancara Mahasiswa", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 5, img: dummy, title: "Fun Post", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
  ]
  
  const cj = [
    {id: 1, img: dummy, title: "SDM Rendah", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 2, img: dummy, title: "Lingkup Jogja", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 3, img: dummy, title: "Eksplanasi & Opini", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 4, img: dummy, title: "Studi Kasus", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
    {id: 5, img: dummy, title: "The Human Perspective Story", text: "Teks singkat yang menjelaskan tentnag tujuan atau objetif dari postingan ini"},
  ]

  return (
    <main className='font-[helvetica] bg-black text-[white] w-full h-full'>
      <Header/>
      <h1 className='text-2xl font-bold text-center pt-26'>Creative Media</h1>
      <section className='pt-12 p-6'>
        <h2 className='text-xl font-bold text-center'>Citizen Journalist</h2>
        <div className='p-8 flex flex-col gap-6'>
          {cj.map((item) => (
            <AnimatedDiv key={item.id} className=''>
              <h3 className='font-semibold text-lg self-start'>{item.title}</h3>
              <div className='flex flex-row gap-4'>
                <img src={item.img} className='w-1/2'></img>
                <span className='text-sm self-center'>{item.text}</span>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </section>
      <section className='pt-8 p-6'>
        <h2 className='text-xl font-bold text-center'>Social Media Specialist</h2>
        <div className='p-8 flex flex-col gap-6'>
          {sms.map((item) => (
            <AnimatedDiv key={item.id} className=''>
              <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-lg'>{item.title}</h3>
                <img src={item.img} className='w-full max-w-128'></img>
              </div>
              <span className='text-sm'>{item.text}</span>
            </AnimatedDiv>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default App
