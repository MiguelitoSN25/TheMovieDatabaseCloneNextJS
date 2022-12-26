const API_KEY='840dccc8886ed89f5da8598a0e0ec1a7'

export default{
  fetchTrending:{
    title:"Trending",
    url:`/trending/all/week?api_key=${API_KEY}&languague=en-US`
  },
  fetchTopRated:{
    title:"Top Rated",
    url:`/movie/top_rated?api_key=${API_KEY}&languague=en-US`
  },
  fetchUpcoming:{
    title:"Upcoming",
    url:`/movie/upcoming?api_key=${API_KEY}&languague=en-US`
  }
  ,
  fetchnowplaying:{
    title:"Now Playing",
    url:`/movie/now-playing?api_key=${API_KEY}&languague=en-US`
  }
}

