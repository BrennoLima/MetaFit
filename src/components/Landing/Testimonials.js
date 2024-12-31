import React, { useState } from 'react';
import { Box, Card, Container, Typography } from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/parallax';

import useIsMobileScreen from '../../utils/useIsMobileScreen';

const TestimonialCard = ({ testimonial }) => {
  const { name, handle, text, image } = testimonial;
  return (
    <Card sx={{ borderRadius: 2 }}>
      <Box
        sx={{
          width: 1,
          background:
            'linear-gradient(180deg, hsl(213deg 46% 34% / 20%), hsl(214deg 41% 51% / 5%))',
        }}
      >
        <img
          src={`assets/images/${image}.png`}
          alt={image}
          style={{ width: '100%' }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography
            color="primary"
            fontWeight={400}
            fontSize={[18, 20]}
            mr={1}
          >
            {name}
          </Typography>

          <Typography
            color="primary"
            fontWeight={400}
            fontSize={[14, 16]}
            sx={{ opacity: 0.5 }}
          >
            {handle}
          </Typography>
        </Box>
        <Typography color="primary" variant="body2" fontSize={16}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};

export const Testimonials = () => {
  const isMobile = useIsMobileScreen();
  const [activeIndex, setActiveIndex] = useState(null);
  const testimonials = [
    {
      name: 'Sophia L.',
      handle: '@sophi001',
      text: "This app has been a game-changer for me! I lost 9 kg and feel healthier and more energetic. The personalized meal plans and workouts fit perfectly into my routine. I've gained confidence and learned how to maintain a balanced, sustainable lifestyle.",
      image: 'testimonials2',
    },
    {
      name: 'Emily R.',
      handle: '@eli097',
      text: "MetaFit helped me lose 6 kg and build a healthy lifestyle! The personalized plans were easy to follow, and now I feel stronger, more energetic, and confident. I've learned so much about balancing my meals and staying consistent with workouts.",
      image: 'testimonials1',
    },
    {
      name: 'Alex M.',
      handle: '@alexm_fit',
      text: "I lost 15 kg of fat, gained muscle, and feel stronger than ever. Beyond the physical changes, I've gained confidence and a healthier mindset. If you're serious about changing your life, this app is the best tool to get you there!",
      image: 'testimonials3',
    },
    {
      name: 'James K.',
      handle: '@jamesklean',
      text: "I've dropped 8 kg and built lean muscle thanks to this app. The workouts and meal plans are so easy to stick with, and I've never felt more confident in my own skin. Highly recommend it to anyone looking for real results!",
      image: 'testimonials1',
    },
    {
      name: 'Lila T.',
      handle: '@lilatfit',
      text: "I finally achieved my goal of losing 12 kg! This app made fitness fun and manageable with its customized approach. My energy levels have skyrocketed, and I love the way I feel every day. It's life-changing!",
      image: 'testimonials2',
    },
    {
      name: 'Oliver C.',
      handle: '@olivercore',
      text: "The app helped me shed 10 kg and gain strength. The progress tracking and tips kept me motivated every step of the way. I'm amazed at how easy it is to live a healthy, sustainable lifestyle now!",
      image: 'testimonials3',
    },
    // {
    //   name: 'Rachel V.',
    //   handle: '@rachvibes',
    //   text: "With this app, I lost 7 kg and built a strong workout routine. The guidance was incredible, and I've learned so much about fitness and nutrition. I feel confident, energized, and proud of my progress!",
    //   image: 'testimonials7',
    // },
    // {
    //   name: 'Ethan W.',
    //   handle: '@ethanworks',
    //   text: "I managed to lose 14 kg and tone up with this app. The tailored plans and expert advice made all the difference. I'm stronger, fitter, and more determined than ever to maintain this lifestyle!",
    //   image: 'testimonials8',
    // },
    // {
    //   name: 'Mia F.',
    //   handle: '@fitwithmia',
    //   text: "Losing 5 kg never felt this good! The app's meal ideas and workouts were perfect for my busy schedule. I'm healthier, happier, and finally loving the way I look and feel!",
    //   image: 'testimonials9',
    // },
    // {
    //   name: 'Noah B.',
    //   handle: '@noahbuilds',
    //   text: "I lost 9 kg while gaining muscle and confidence. The app taught me how to fuel my body and stay consistent with workouts. It's like having a personal trainer and nutritionist in my pocket!",
    //   image: 'testimonials10',
    // },
    // {
    //   name: 'Ava G.',
    //   handle: '@avagains',
    //   text: "Thanks to this app, I've lost 11 kg and completely transformed my lifestyle. The community and support were amazing, and I've learned how to stay healthy in a sustainable way. Highly recommend!",
    //   image: 'testimonials11',
    // },
    // {
    //   name: 'Liam S.',
    //   handle: '@liamstrong',
    //   text: "I dropped 6 kg and feel stronger and more energized than ever. The personalized meal plans and workouts were simple to follow, and the progress I've made is incredible. I'm so grateful!",
    //   image: 'testimonials12',
    // },
    // {
    //   name: 'Ella D.',
    //   handle: '@ella_daily',
    //   text: "I've never felt better! This app helped me lose 8 kg and improve my fitness level. The personalized plans were a game-changer, and I've gained so much confidence along the way. It's been an amazing journey!",
    //   image: 'testimonials13',
    // },
  ];

  return (
    <Container
      sx={{
        width: 1,
        py: '5vh',
      }}
    >
      <Typography
        color="primary"
        align="center"
        fontSize={[18, 28]}
        fontWeight={600}
        sx={{ mb: [0, 1] }}
        letterSpacing={1.2}
      >
        Get to know some of our success stories
      </Typography>
      <Typography
        color="primary"
        align="center"
        fontSize={[16, 24]}
        sx={{ opacity: 0.75, mb: [3, 6] }}
      >
        You can be the next
      </Typography>
      <Box sx={{ py: [2, 4] }}>
        <Swiper
          centeredSlides
          onActiveIndexChange={swiper =>
            !isMobile && setActiveIndex(swiper.realIndex)
          }
          loop={true}
          grabCursor
          spaceBetween={50}
          slidesPerView={3}
          modules={[FreeMode, A11y, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index + 'testimonials'}>
              <Box
                sx={{
                  py: [2, 4],
                  transition: 'all 0.2s linear',
                  transform: activeIndex === index ? 'scale(1.1)' : '',
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};
