'use client';

import { TrendingMovieTvDataType } from 'database.ds';
import { CombinedMovieApiTypes } from 'database.ds';

import MediaCard from '@/components/MediaCard/MediaCard';
import MediaCast from '@/components/MediaCard/MediaCast';
import { CarouselItem } from '@/components/ui/carousel';
import { Carousel, CarouselContent } from '@/components/ui/carousel';

type MediaCarouselProps = {
  title: string;
  data:
    | TrendingMovieTvDataType['results']
    | CombinedMovieApiTypes['cast']
    | CombinedMovieApiTypes['recommendation']['results']
    | CombinedMovieApiTypes['similar']['results'];
  type?: 'movie' | 'tv';
  cast?: boolean;
  className?: string;
};

export default function MediaCarousel({
  title,
  data,
  type,
  cast,
  ...props
}: MediaCarouselProps) {
  return (
    <section {...props}>
      <h2 className='text-white mt-6 mb-6 md:mt-9'>{title}</h2>
      <Carousel className='w-full max-w-7xl'>
        <CarouselContent className='-ml-4'>
          {cast && data
            ? // @ts-expect-error this is not generated in the API that is why this commented
              [...(data.cast || []), ...(data.crew || [])].map(
                (item, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      className={`basis-1/2 ${cast ? 'md:basis-1/4 lg:basis-1/5' : 'md:basis-1/3'} pl-4`}
                    >
                      <MediaCast data={item} />
                    </CarouselItem>
                  );
                },
              )
            : // @ts-expect-error this is not generated in the API that is why this commented
              data?.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className='basis-1/2 md:basis-1/3 pl-4'
                  >
                    <MediaCard
                      media={item}
                      carousel
                      type={type}
                      showTrailer={false}
                    />
                  </CarouselItem>
                );
              })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
