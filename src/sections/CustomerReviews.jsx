import { ReviewCard } from "../components";
import { reviews } from "../constants";

import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const CustomerReviews = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-center text-4xl font-bold dark:text-white'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text  dark:text-gray-300'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="mt-10 mb-10">
            <ReviewCard
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              className="dark:text-gray-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default CustomerReviews;
