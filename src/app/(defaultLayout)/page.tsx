import { Metadata } from 'next';

import MediaCarousel from '@/components/MediaCarousel';
import MediaGrid from '@/components/MediaGrid';

export const metadata: Metadata = {
  title: {
    absolute: 'About',
  },
};

export default function Home() {
  const movieCarousel = [
    {
      image: '/images/mastersoftheair.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Masters of the Air',
    },
    {
      image: '/images/monarch.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Monarch',
    },
    {
      image: '/images/pachinko.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Pachinko',
    },
    {
      image: '/images/mastersoftheair.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Masters of the Air',
    },
    {
      image: '/images/monarch.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Monarch',
    },
    {
      image: '/images/pachinko.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Pachinko',
    },
  ];
  const movieData = [
    {
      image: '/images/mastersoftheair.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Masters of the Air',
    },
    {
      image: '/images/monarch.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Monarch',
    },
    {
      image: '/images/pachinko.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Pachinko',
    },
    {
      image: '/images/slowhorses.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Slowhorses',
    },
    {
      image: '/images/forallmankind.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'For all mankind',
    },
    {
      image: '/images/mastersoftheair.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Masters of the Air',
    },
    {
      image: '/images/monarch.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Monarch',
    },
    {
      image: '/images/pachinko.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Pachinko',
    },
    {
      image: '/images/slowhorses.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Slowhorses',
    },
    {
      image: '/images/forallmankind.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'For all mankind',
    },
    {
      image: '/images/mastersoftheair.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Masters of the Air',
    },
    {
      image: '/images/monarch.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Monarch',
    },
    {
      image: '/images/pachinko.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Pachinko',
    },
    {
      image: '/images/slowhorses.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'Slowhorses',
    },
    {
      image: '/images/forallmankind.png',
      date: 2017,
      mediaType: 'string',
      rating: 'PG',
      title: 'For all mankind',
    },
  ];
  return (
    <>
      <MediaCarousel title='Trending' data={movieCarousel} />
      <MediaGrid title='Recommened for you' data={movieData} />
    </>
  );
}
