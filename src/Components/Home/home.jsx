import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import book1 from '../../Assets/book-1.jpg';
import book2 from '../../Assets/book-2.jpg';
import book3 from '../../Assets/book-3.jpg';
import book4 from '../../Assets/book-4.jpg';
import book5 from '../../Assets/book-5.jpg';
import book7 from '../../Assets/b00k-7.jpg';
import book8 from '../../Assets/book-8.jpg';
import book9 from '../../Assets/book-9.jpg';
import book10 from '../../Assets/book-10.jpg';
import book11 from '../../Assets/book-11.jpg';
import book12 from '../../Assets/book-12.jpg';
import book13 from '../../Assets/book-13.jpg';


const Home = () => {
  return (
    <>
      <section className='bg-gray-400' id='home'>
        <div className='flex align-center flex-row gap-6'>
          <div className='flex-1 basis-[42rem] pt-16 pl-16'>
            <h3 className='text-black text-[4.5rem] ml-10'> Get up to 60% off</h3>
            <p className='text-gray-900 text-[1.4rem] leading-[2] py-4 pl-11'>
              This discount is available to our faithful readers. The first 100 customers 
              on Father's Day also get in on it
            </p>
            <a href='/discover' className='rounded-full text-white bg-red-700 px-4 py-4 justify-center text-[1.4rem] m-20'>Shop Now!</a>
          </div>
          <div className='max-w-screen w-full overflow-x-hidden gap-0 mt-20'>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Navigation, Pagination]} 

              className='w-4/5 justify-center items-center'
            >
              <SwiperSlide>
                <a href='#'><img src={book1} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#'><img src={book2} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#'><img src={book3} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#'><img src={book4} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#'><img src={book5} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#'><img src={book7} alt='' className='h-60 hover:scale-[0.9] max-h-full max-w-full object-cover'/></a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className='flex flex-col my-20 items-center'>
        <div className='flex flex-row justify-between  gap-20'>
          <div className='flex align-center gap-6 py-8'>
            <i className='fas fa-plane text-[3.5rem] text-red-700'></i>
            <div className='content'>
              <h3 className='text-3xl text-black pb-2'>Free Shipping</h3>
              <p className='text-[1.4rem] text-gray-900'>Order over N500</p>
            </div>
          </div>
          <div className='flex align-center gap-6 py-8'>
            <i className='fas fa-lock text-[3.5rem] text-red-700'></i>
            <div className='content'>
              <h3 className='text-3xl text-black pb-2'>Secure Payment</h3>
              <p className='text-[1.4rem] text-gray-900'>100% secure payment</p>
            </div>
          </div>
          <div className='flex align-center gap-6 py-8'>
            <i className='fas fa-redo-alt text-[3.5rem] text-red-700'></i>
            <div className='content'>
              <h3 className='text-3xl text-black pb-2'>Easy Returns</h3>
              <p className='text-[1.4rem] text-gray-900'>10 day returns</p>
            </div>
          </div>
        </div>
        <div className='items-center'>
          <div className='flex align-center gap-6 py-8'>
            <i className='fas fa-headset text-[3.5rem] text-red-700'></i>
            <div className='content'>
              <h3 className='text-3xl text-black pb-2'>24/7 Customer Support</h3>
              <p className='text-[1.4rem] text-gray-900'>Call us anytime</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-10' id='featured'> 
        <h1 className='text-center mb-8 relative before:content-[""] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[.1rem] before:bg-gray-800 before:-translate-y-1/2 before:z-[-1]'>
          <span className='text-3xl py-2 px-8 text-black bg-white border-black'>Featured Books</span>
        </h1>
        <div className='featured-slider'>
          <Swiper
            spaceBetween={30}
            slidesPerView={4.5}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book1} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book2} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book3} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book4} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book5} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book7} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book8} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book9} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book10} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book11} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book12} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='ml-10 w-[18rem] h-[30rem] my-2 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
                <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                  <a href='#' className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                  <a href='#' className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'></a>
                </div>
                <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                  <img src={book13} className='h-80 w-72 max-h-full max-w-full object-cover' alt=''/>
                </div>
                <div className='bg-white p-0'>
                  <h3 className='text-black text-xl'>Price</h3>
                  <div className='text-2xl text-black pt-0 pb-4'>N1500<span className='text-xl line-through text-black'>N2000</span></div>
                  <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'>add to cart</a>
                </div>
              </div>
            </SwiperSlide>  
          </Swiper>
        </div>
      </section>
      
      <section className='bg-gray-400 bg-cover bg-center bg-fixed'>
        <form action='' className='max-w-[45rem] m-auto text-center py-[5rem]'>
          <h3 className='text-3xl text-white pb-2 font-normal'>Subscribe for latest updates</h3>
          <input type='email' name='' placeholder='enter your email' id='' className='w-full my-3 py-4 px-5 text-[1.6rem] text-black rounded-md normal-case'/>
          <input type='submit' value='subscribe' className='rounded-full text-white bg-red-700 px-4 py-4 justify-center text-[1.4rem]'></input>
        </form>
      </section>
    </>
  );
}
 
export default Home;
