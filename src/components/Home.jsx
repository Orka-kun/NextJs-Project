import React from 'react'
import Image from 'next/image'
import Image1 from '../assets/play.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'
import Card4 from '../assets/Card4.png'
import Card5 from '../assets/Card5.png'
import Card6 from '../assets/Card6.png'
import Card7 from '../assets/Card7.png'
import Card8 from '../assets/Card8.png'
import Card9 from '../assets/Card9.png'
import btnicon1 from '../assets/btnicon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import logo from '../assets/logo.png'
import profile3 from '../assets/profile3.png'
import icon1 from '../assets/icon1.png'
import micIcon1 from '../assets/micIcon1.png'
import micIcon2 from '../assets/micIcon2.png'
import roundIcon2 from '../assets/roundIcon2.png'
import listIcon from '../assets/listIcon.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import icon16 from '../assets/icon16.png'
import icon17 from '../assets/icon17.png'
import icon18 from '../assets/icon18.png'
import icon19 from '../assets/icon19.svg'
import icon20 from '../assets/icon20.png'
import human1 from '../assets/human1.png'
import human2 from '../assets/human2.png'
import human3 from '../assets/human3.png'
import human4 from '../assets/human4.png'
import smIcons from '../assets/smIcons.png'
import greenCard from '../assets/greenCard.svg'
import fbIcon from '../assets/fbIcon.png'
import yIcon from '../assets/yIcon.png'
import twtIcon from '../assets/twtIcon.png'
import linkedIcon from '../assets/linkedIcon.png'
import Line from '../assets/Line.png'
import Accordion from './Accordion'



const cardData = [
    {
      image : Card1,
      tags: [
        { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
        { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
      ],
      description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
      details: [
        { icon: icon2, text: 'বিগেনার' },
        { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
        { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
      ],
      instructor: {
        image : profile3,
        name: 'কালিম আহসান',
        details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
      },
      price: '৳ ৫,০০০',
      originalPrice: '৳ ৫,৫০০',
      buttonText: 'এখনি শিখা শুরু করুন'
    },
    {
        image : Card2,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card3,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card4,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card5,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card6,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card7,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card8,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card9,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card7,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card8,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
      {
        image : Card9,
        tags: [
          { text: 'ইমেইল মার্কেটিং', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'রেকর্ডেড কোর্স', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'রিয়েল প্রজেক্টস এর  মাধ্যমে কোল্ড ইমেইল  মার্কেটিং শিখুন',
        details: [
          { icon: icon2, text: 'বিগেনার' },
          { icon: icon3, text: 'প্রফেশনাল সার্টীফিকেট' },
          { icon: icon4, text: '১.৩ ঘণ্টা লেসন' }
        ],
        instructor: {
          image : profile3,
          name: 'কালিম আহসান',
          details: '১০ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট, লিড মারকেটারঃ এক্সপোনেন্ট'
        },
        price: '৳ ৫,০০০',
        originalPrice: '৳ ৫,৫০০',
        buttonText: 'এখনি শিখা শুরু করুন'
      },
  ]
    
const Home = () => {
  return (
<div className='font-bangla'>
    <div className='bg-[#1B1B1B] min-h-screen flex flex-col'>
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center ">
        
            <a href="#" className="text-3xl flex font-LiNoirrit pl-28 "><Image alt='' className='h-8 mr-1' width={32} src={logo}/>প্রায়োগীক</a>
        </div>
        
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden px-24  md:flex md:items-center md:w-auto w-full" id="menu">
            <nav className='py-1'>
                <ul className="md:flex items-center justify-between text-base text-black font-bold pt-4 md:pt-0">
                    <li><a className="md:p-4 py-3 mx-2.5 " href="#"> কোর্স </a></li>
                    <li><a className="md:p-4 py-3 mx-2.5 " href="#">আমাদের সম্পর্কে</a></li>
                    <li><a className="md:p-4 py-3 mx-2.5 " href="#">ব্লগ</a></li>
                    <li>
                        <button className='bg-[#0F766D] text-white rounded p-2'>
                        <a className="md:p-4 py-3 px-0  md:mb-0 mb-2" href="#">লগইন</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div className='max-h-screen pt-32 flex '>
        <div className='flex '>
            <div className='ml-44 space-y-3 me-28 '>
                <h3 className='text-4xl pt-4 font-bold bg-gradient-to-b from-[#FFDE70] to-[#FFFFFF] bg-clip-text text-transparent'>ইন্ড্রাস্ট্রি এক্সপার্টদের থেকে</h3>
                <h1 className='text-[#2DD4C5] text-6xl font-bold '>ডিজিটাল মার্কেটিং শিখুন</h1>
                <p  className='text-white max-w-xl text-base'>ডিজিটাল মার্কেটিংয়ে ক্যারিয়ার গড়ার জন্য দ্রুত গতিতে যান। এই সার্টিফিকেট প্রোগ্রামে, আপনি আপনার নিজস্ব গতিতে চাহিদার মধ্যে দক্ষতা শিখবেন, কোন ডিগ্রি বা অভিজ্ঞতার প্রয়োজন নেই।</p>
                <div className=' flex items-center space-x-3'>
                    <button className=' h-fit bg-[#0D9488] py-3 px-6 text-white rounded-lg'>কোর্সগুলো দেখুন</button>
                    <button className='h-fit bg-[#F9851A] py-3 px-6 text-white rounded-lg'>সকল কোর্সের মেম্বার হন </button>
                    <div className=' px-14 '>
                        <Image alt='' className='max-w-16' src ={Image1}/>
                    </div>
                </div>
            </div>
            <div className='relative max-w-52 flex gap-0.5'>
                    <Image alt='' className='mb-24 relative z-10' src={profile1}/> 
                    <ul className='absolute z-50 top-56 left-6'>
                        <li><h1 className='text-white '>আবুল কাসেম</h1></li>
                        <li><p className='text-white text-xxsm font-light'>১৫ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট </p></li>
                    </ul>
                <div>
                    <Image alt='' className='absolute top-52 -left-10 max-w-24' src={icon1}/>          
                </div>
                <div>
                    <Image alt='' className='absolute z-10 max-w-24' src={micIcon1}/>
                </div>
                <div>
                    <Image alt='' className='absolute z-10 max-w-24 -top-12 -right-40 ' src={micIcon2}/>
                </div>
                <div className=''>
                    <Image alt='' className='absolute max-w-22  top-6 -right-32' src={roundIcon2}/>
                </div>
                <Image alt='' className='z-10 mt-24'src={profile2}/>
                <ul className='absolute z-50 top-80 left-60 w-32'>
                        <li><h1 className='text-white text-base'>আবুল কাসেম</h1></li>
                        <li><p className='text-white text-xxsm font-light'>১৫ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট </p></li>
                </ul>
            </div>
        </div>
    </div>
    </div>

<div className="max-w-6xl mx-auto my-8 px-2 ">

<div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-4">
আমাদের নতুন কোর্স সমূহ 
</div>

<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5 pt-6 mx-4">
      {cardData.map((card, index) => (
        <li key={index} className="relative bg-white flex flex-col justify-between border rounded-lg shadow-md hover:shadow-teal-400">
          <a className="relative">
            <Image alt='' className="rounded-lg relative object-cover  " src={card.image} loading="lazy" />
          </a>
          <div className="flex flex-col justify-between gap-3 px-4 py-2 mx-3">
            <div className='flex'>
              {card.tags.map((tag, i) => (
                <button key={i} type="button" className={`text-${tag.color} bg-${tag.bgColor} focus:outline-none rounded-full text-xxsm px-1.5 py-0.5 mx-1 flex`}>
                  {tag.icon && <Image alt='' className='mx-1' src={tag.icon} />}
                  {tag.text}
                  
                </button>
                
              ))}
            </div>
            <p className="text-black-600 two-lines font-bold">
              {card.description}
            </p>
            <div className='flex text-xxsm space-x-2'>
              {card.details.map((detail, i) => (
                <React.Fragment key={i}>
                  <Image alt='' className='w-3 h-3' src={detail.icon} />
                  <span>{detail.text}</span>
                </React.Fragment>
              ))}
            </div>
            <div className='flex items-center'>
              <Image alt='' src={card.instructor.image} />
              <div className='mx-1'>
                <h1 className='text-sm font-bold'>{card.instructor.name}</h1>
                <p className='text-xxsm'>{card.instructor.details}</p>
              </div>
            </div>
            <div className='h-0.5 max-w-96 bg-[#E5E5E5]'>

            </div>
            <span className="flex flex-wrap text-sm gap-4 my-1 items-center font-bold">
              <h1 className='text-orange-500 text-xl'>{card.price}</h1>
              <p className='text-[#4F4F4F] line-through'>{card.originalPrice}</p>
              <button className='bg-[#0F766D] text-white text-xs font-normal py-1 px-3 rounded flex-1'>
                {card.buttonText}
              </button>
            </span>
          </div>
        </li>
      ))}
      </ul>
    </div>
    <div className='bg-[#09090B] py-28 flex justify-center gap-12'>
      <div className='text-white max-w-md'>
        <h1 className='text-3xl font-bold pb-4'>ক্যারিয়ার গড়ার সম্পূর্ণ ক্যারিয়ার পাথ </h1>
        <p className='text-sm pb-4 pr-7'>চাহিদার মধ্যে প্রযুক্তিগত দক্ষতা শেখার জন্য আপনাকে গাইড করতে আমাদের কাঠামোগত শেখার রোডম্যাপ অনুসরণ করুন যাতে আপনি একজন নবীন থেকে একজন প্রতিভাবান পেশাদার হতে পারেন।</p>
        <ul className='text-xl font-light'>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>ইন্ড্রাস্ট্রি ট্রেন্ড অনুযায়ী লার্নিং রোডম্যাপ </li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>১০ বছর এক্সপেরিয়েন্সড ইন্সট্রাক্টর</li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>বিষয়ভিত্তিক বিশেষজ্ঞদের সাহায্য নিন</li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>ইন্ড্রাস্ট্রি নতুন এবং বেস্ট প্র্যাকটিসগুলো শিখুন</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 gap-2 max-w-lg'>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3 '>
        <Image alt='' className='pl-2' src={icon5} /><h1>ফুল স্টাক ডিজিটাল মার্কেটার</h1>
        </div>
        <div className='bg-white px-5 py-4 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon6} /><h1>সোশ্যাল মিডিয়া মার্কেটার </h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon7} /><h1>সোশ্যাল ইনফ্লুয়েন্সার</h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon8} /><h1>কন্টেন্ট এবং কপিরাইটার</h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon9} /><h1>এসইও এক্সপার্ট</h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon10} /><h1 >PPC মার্কেটার</h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon11} /><h1>ইমেইল মার্কেটিং</h1>
        </div>
        <div className='bg-white px-3 py-5 text-base font-bold rounded-lg text-center flex items-center gap-x-3'>
          <Image alt=''  src={icon12} /><h1>ডিজিটাল এনালাইটিক্স</h1>
        </div>
      </div>
      
    </div>
    <div className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
      আমাদের সুদক্ষ ইন্সট্রাকট
    </div>
    <ul className='grid grid-cols-4 max-w-[62rem] mx-auto gap-4'>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human1}/>
        <div className='text-center py-4 '>
          <h1 className='font-bold text-xl '>ফকরুল ইসলাম মিদুল </h1>
          <h2 className='text-sm text-[#115E57]'>ডিজিটাল মার্কেটিং এক্সপার্ট </h2>
          <p className='text-xxs'>12 বছর এর অভিগতা সম্পুর্ন </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className=' bg-white rounded-lg'>
        <Image alt='' src={human2}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>ফকরুল ইসলাম মিদুল </h1>
          <h2 className='text-sm text-[#115E57]'>ডিজিটাল মার্কেটিং এক্সপার্ট </h2>
          <p className='text-xxs'>12 বছর এর অভিগতা সম্পুর্ন </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human3}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>ফকরুল ইসলাম মিদুল </h1>
          <h2 className='text-sm text-[#115E57]'>ডিজিটাল মার্কেটিং এক্সপার্ট </h2>
          <p className='text-xxs'>12 বছর এর অভিগতা সম্পুর্ন </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human4}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>ফকরুল ইসলাম মিদুল </h1>
          <h2 className='text-sm text-[#115E57]'>ডিজিটাল মার্কেটিং এক্সপার্ট </h2>
          <p className='text-xxs'>12 বছর এর অভিগতা সম্পুর্ন </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
    </ul>
    </div>
    <div>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    প্রায়োগিক এ আপনি আরও যা পাচ্ছেন 
    </div>
    <div className='grid grid-cols-2 max-w-5xl mx-auto gap-x-10 gap-y-14 pb-24 '>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon13}/>
        <div className=''>
        <h1 className='font-bold text-sm'>সার্বক্ষনিক সাপোর্ট </h1>
        <p className='text-sm pt-3  '> তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon14}/>
        <div className=''>
        <h1 className='font-bold text-sm'>প্রফেশনাল সার্টিফিকেট </h1>
        <p className='text-sm pt-3  '>তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon15}/>
        <div className=''>
        <h1 className='font-bold text-sm'>জব ইন্টার্ভিউ প্রস্তুতি </h1>
        <p className='text-sm pt-3  '>তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon16}/>
        <div className=''>
        <h1 className='font-bold text-sm'>ক্যারিয়ার রোডম্যাপ </h1>
        <p className='text-sm pt-3  '>তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon17}/>
        <div className=''>
        <h1 className='font-bold text-sm'>এসাইনমেন্ট</h1>
        <p className='text-sm pt-3  '>তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon18}/>
        <div className=''>
        <h1 className='font-bold text-sm'>ইন্ড্রাস্ট্রি এক্সপার্ট মেন্টর</h1>
        <p className='text-sm pt-3  '> তবে ইসরায়েলের দক্ষিণাঞ্চলে একটি ঘাঁটিতে কয়েকটি ক্ষেপণাস্ত্র ও ড্রোন আঘাত হেনেছে বলেছে আইডিএফ এতে সামান্য অবকাঠামোগত ক্ষতি হয়েছে বলেছে এই বাহিনী।</p>
        </div>
      </div>
    </div>
    </div>
    <div className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    স্টুডেন্টদের ফিডব্যাক
    </div>
    <div className=''>
      <ul className='grid grid-cols-3 max-w-5xl mx-auto gap-2'>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      <li className='bg-white rounded-lg p-5'>
        <Image alt='' className='max-w-8 pb-4' src={icon19}/>
        <p className='text-sm font-bold pb-4'>টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11' src={icon20}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm'>আসলাম খান </h1>
          <h3 className='text-xxs text-[#0D9488]'>ডিজিটাল মার্কেটিং</h3>
        </div>
        </div>
      </li>
      </ul>
    </div>
    <div className='relative p-36 flex items-center justify-center'>
      <Image alt='' className='absolute max-w-5xl ' src={greenCard}/>
      <div className='relative z-10 flex items-center gap-64'>
         <div className='text-white'>
            <h3 className=' text-3xl font-bold'>প্রায়োগিকের প্লাস মেম্বার হোন</h3>
            <h1 className='text-[#D1FFA3] text-6xl font-bold'>২৫% কম খরচে </h1>
            <h3 className='text-3xl font-bold'>সব কোর্সের এক্সেস নিন</h3>
         </div>
          <button className='bg-[#F9851A] text-white rounded-md px-4 py-2'>সকল কোর্সের মেম্বার হন </button>
      </div>
    </div>

    <div className="flex justify-center text-2xl md:text-4xl font-bold">
    আমদের সম্পর্কে কিছু প্রশ্ন এবং উত্তর 
    </div>
    <div className='grid grid-rows-5 max-w-[52rem] pt-10 mx-auto gap-2 pb-10'>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>কোর্সের ভর্তি বাতিল করা কী সম্ভব ?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>সার্টিফিকেটের মেয়াদ কী শেষ হবে ?</h1>
      </div>   
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>কোন টেকনিকাল সমস্যা কিভাবে রিপোর্ট করবো ?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>পাসওয়ার্ড ভুলে গেলে কিভাবে ঠিক করবো ?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>আপনাদের সাতে কিভাবে যোগাযোগ করবো ?</h1>
      </div>
      

    </div>

  </div>
  <div className='bg-[#042F2B] text-white '>
      <div className=' grid grid-cols-4 max-w-[60rem] mx-auto pt-24 pb-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Image alt='' className='max-w-8 max-h-8' src={logo}/>
            <h1 className='text-3xl font-LiNoirrit'>প্রায়োগীক</h1>
          </div>
          <p className='text-[.8rem] font-light max-w-56 '>বাংলায় ডিজিটাল মার্কেটিং সম্পর্কে যারা জানতে চান তাদের জন্য সেরা ডিজিটাল মার্কেটিং এডুকেশন প্লাটফর্ম </p>
          <div className='flex gap-4'>
            <Image alt='' className=' max-h-8 max-w-8' src={fbIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={yIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={twtIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={linkedIcon}/>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1>কোম্পানি</h1>
          <h3 className='text-[.8rem] font-light'>ক্যারিয়ার</h3>
          <h3 className='text-[.8rem] font-light'>শিক্ষক হিসেবে জয়েন</h3>
          <h3 className='text-[.8rem] font-light'>প্রাইভেসি পলিসি</h3>
          <h3 className='text-[.8rem] font-light'>রিফান্ড পলিসি</h3>
          <h3 className='text-[.8rem] font-light'>ব্যবহারকারীর শর্তাবলি</h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1>অন্যান্য  </h1>
          <h3 className='text-[.8rem] font-light'>ব্লগ</h3>
          <h3 className='text-[.8rem] font-light'>নোটস এবং গাইডস</h3>
          <h3 className='text-[.8rem] font-light'>ভেরিফাই সার্টিফিকেট</h3>
          <h3 className='text-[.8rem] font-light'>সকল কোর্স সমূহ </h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1>আমাদের সাতে যোগাযোগের  মধ্যম </h1>
          <h3 className='text-[.8rem] font-light'>হোয়াটস অ্যাপ: +880171 457 6023 (24x7)</h3>
          <h3 className='text-[.8rem] font-light'>দেশের বাহিরে থেকে : +8806 895 926 23</h3>
          <h3 className='text-[.8rem] font-light'>ইমেল: hello@prayogik.com</h3>
        </div>
      </div>
      <Image alt='' className='py-10 mx-auto max-w-4xl' src={Line}/>
      <p className=' text-[.8rem] text-center font-light pb-10'>স্বত্ব © ২০২৩ - ২০২৪ প্রয়োগিক  কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
  </div>

</div>
  )
}

export default Home