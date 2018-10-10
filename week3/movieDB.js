var movies = [
    {
        title: "in bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "mad max",
        rating: 5,
        hasWatched: true
    },
    {
        title: "les miserables",
        rating: 3.5,
        hasWatched: false
    }
];

movies.map(movie=>{
    if(movie.hasWatched){
        console.log("You have watched "+movie.title);
    }else{
        console.log("You have not seen \""+movie.title);
    }
    console.log("\" - "+movie.rating+" stars");
}); //return문으로 작성하면 더 좋다!

 