'use client';

import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import { Media } from '@/components/MediaCard/MediaCard';
import MediaCard from '@/components/MediaCard/MediaCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type MediaCarouselProps = {
  title: string;
  data: Media[];
};

export default function MediaCarousel({ title, data }: MediaCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section>
      <h2 className='text-white mt-6 mb-6 md:mt-9'>{title}</h2>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className='w-full max-w-7xl'
      >
        <CarouselContent className='-ml-4'>
          {data.map((item, index) => {
            return (
              <CarouselItem key={index} className='basis-1/2 md:basis-1/3 pl-4'>
                <MediaCard data={item} carousel />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
