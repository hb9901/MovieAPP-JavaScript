export const MOVIE_API_KEY = "c208bdf2f7ce7c5a5d91613b1e3f4783";

export const MOVIE_READ_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA4YmRmMmY3Y2U3YzVhNWQ5MTYxM2IxZTNmNDc4MyIsInN1YiI6IjY2MjhmM2JkYTM5ZDBiMDE3MDQ3ZGYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TArw1PU7DorLQ5xVH_Zf9M9WAm5z2amaJp1tAU9nGkM";

export const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&`;

export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?language=ko-KR&include_adult=false`;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA4YmRmMmY3Y2U3YzVhNWQ5MTYxM2IxZTNmNDc4MyIsInN1YiI6IjY2MjhmM2JkYTM5ZDBiMDE3MDQ3ZGYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TArw1PU7DorLQ5xVH_Zf9M9WAm5z2amaJp1tAU9nGkM"
  }
};
