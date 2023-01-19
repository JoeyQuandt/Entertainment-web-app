import Navbar from "./navbar/navbar";
import { chakra, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import SearchBar from "./search/search";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../pages/SearchContext";
import ContentCard from "./contentCard/contentCard";
import { useRouter } from "next/router";

const MOVIE_API_KEY = "fa940f6d4f0f73fb45419d96bae71b25";

export default function Layout({ children }) {
  const router = useRouter();
  const { search } = useContext(SearchContext);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${MOVIE_API_KEY}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.results);
      });
  }, [search]);

  return (
    <Box display={{ lg: "flex" }}>
      <Navbar />
      <chakra.main marginTop="30px" width="100vw" paddingInline="24px">
        <SearchBar />
        {!searchData ? (
          children
        ) : (
          <>
            <Heading
              as="h2"
              variant="h2"
              marginBottom="16px"
              fontSize={{ md: "2rem" }}
            >
              Found {searchData.length} results for '{search}'
            </Heading>
            <SimpleGrid
              columns={{ sm: 2, md: 3, lg: 4 }}
              spacingX="15px"
              spacingY="16px"
              marginBottom="60px"
            >
              {searchData.map((content) => {
                return (
                  <ContentCard
                    id={content.id}
                    title={content.title ? content.title : content.name}
                    release={
                      content.release_date || content.first_air_date
                        ? content.release_date
                          ? content.release_date
                          : content.first_air_date
                        : "NVT"
                    }
                    mediaType={content.media_type}
                    thumbnail={
                      content.backdrop_path
                        ? content.backdrop_path
                        : content.poster_path
                        ? content.poster_path
                        : content.profile_path
                    }
                    rating={content.vote_average ? content.vote_average : "NVT"}
                    key={content.id}
                  />
                );
              })}
            </SimpleGrid>
          </>
        )}
      </chakra.main>
    </Box>
  );
}