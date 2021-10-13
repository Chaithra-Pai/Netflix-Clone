import './App.css';
import Row from './Row.jsx';
import Banner from './Banner.jsx';
import Nav from './Nav.jsx';
import requests from './requests.jsx';

function App() {
  let rows = [{
      title: "NETFLIX ORIGINALS",
      fetchUrl: requests.fetchNetflixOriginals
    },
    {
      title: "Trending Now",
      fetchUrl: requests.fetchActionMovies
    },
    {
      title: "Top Rated",
      fetchUrl: requests.fetchTopRated
    },
    {
      title: "Action Movies",
      fetchUrl: requests.fetchActionMovies
    },
    {
      title: "Comedy Movies",
      fetchUrl: requests.fetchComedyMovies
    },
    {
      title: "Horror Movies",
      fetchUrl: requests.fetchHorrorMovies
    },
    {
      title: "Romance Movies",
      fetchUrl: requests.fetchRomanceMovies
    },
    {
      title: "Documentaries",
      fetchUrl: requests.fetchDocumentaries
    }
  ];


  return (
    <div className="App">
      <Nav />
      <Banner />
      {rows.map((item,index)=>{
        return(
          <Row title={item.title} fetchUrl={item.fetchUrl}isLargeRow={index===0?true:false}/>
        )
      })}
    </div>
  );
}

export default App;
