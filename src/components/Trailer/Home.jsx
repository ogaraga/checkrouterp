import Filter from '../MovieCard/Filter';
import  MovieCard from '../MovieCard/MovieCard';
import './Home.css';
import { useEffect, useState } from "react";
import NavBar from './NavBar';
function Home() {
    const[movie, setMovie] = useState([]);

    useEffect(()=>{
      const Movies = [
        {id: 1, title: "Game of Money",description:"white money is deadly and avoidable", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 10, imgsrc: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
        {id: 2, title: "Lust of the eye",description:"Its always good to mind your business and leave what you see around as they might pose distraction to you", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 20, imgsrc: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 3, title: "A foolish Son",description:"Using our common sense pays a lot", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 40, imgsrc: "https://media.gettyimages.com/id/1246707036/photo/the-french-rapper-kery-james-acts-while-filming-banlieusard-2-in-the-forest-of-bandia-in.jpg?s=612x612&w=0&k=20&c=HqEYYsvFJISWP9UMeZvEzS-onFpoL0fDG9ixWshfO58="},
        {id: 4, title: "The Dance of Pain",description:"When your God lets you alone, the pains multiplies, hence go to equity with clean hands for your God to bless you", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 50, imgsrc: "https://media.gettyimages.com/id/1128688324/photo/a-man-passes-by-nigerian-movie-billboards-at-a-cinema-in-lagos-on-february-19-2019-with-its.jpg?s=612x612&w=0&k=20&c=hFllpiYCeAVnsIuRa3ZZGlEbqeLZdeaRFSoYxQR1O9I="},
        {id: 5, title: "Tough kiss",description:"There are challenges but only a tough approach to it matters", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 5, imgsrc: "https://cdn.pixabay.com/photo/2019/10/17/21/17/joker-4557864_1280.jpg"},
        {id: 6, title: "Double Trouble",description:"The wrong way that seemeth right, is indeed a double of vices", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 45, imgsrc:"https://hips.hearstapps.com/hmg-prod/images/mh-9-15-movies-1664459084.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"},
        {id: 7, title: "Masters of the Game",description:"Until you belong, you won't really become a master there! Quite intriguing!", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 25, imgsrc: "https://hips.hearstapps.com/hmg-prod/images/best-war-movies-of-all-time-1584728705.jpg?crop=0.8888888888888888xw:1xh;center,top"},
        {id: 8, title: "Expedition",description:"You can't beat the prepared and determined/united", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 35, imgsrc: "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg"},
        {id: 9, title: "Born to rule",description:"It takes the one who is born to overtame situations to be a  game ruler", posterURL: <a href="https://port-ogaraga.vercel.app">PosterURL</a>,rating: 15, imgsrc: "https://pyxis.nymag.com/v1/imgs/3b6/1b5/809f83e544831f5301bea0398d2a6a489e-08-war-movies-ranking-2.2x.rsocial.w600.jpg"},
      ]
      
      let arr =[]
      Movies.map(movie =>{
        movie;
        arr.push(movie);
        setMovie(arr);
      })    
  }, [])

    return (
    <>
        <NavBar/>
        <Filter/> 
        <div className='outlet'>
        <h1>MOVIE-LISTS</h1>
        <span> Click on each Card to navigate to trailer page</span>
        </div>
        <div className='Home'>
        {movie && movie.length > 0 && movie.map(movItem => <MovieCard  key={movItem.id} movItem ={movItem}/>)}          
        </div>
    </>
    )
}
export default Home;