"use client";
import { useState, useEffect,use} from "react";
import "../movies.css";
import Cabecera from "@/app/Cabecera/Cabecera";
import PieDePagina from "@/app/PieDePagina/PieDePagina";

export default function MovieDetails({params}){
    const {id} = use(params);
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        fetch("https://mflixbackend.azurewebsites.net/api/movies/${id}")
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            setMovie(data.find(mov=> mov._id.toString() === id))
        })
        .catch(err=> console.log(err))
    }, []);

    return(
        <div className="movie-detail-id">
            <div className="movie-detail-id-img">
                <img src={movie.poster}></img>
            </div >
            <div className="movie-detail-id-info">
                <h2>{movie.title}</h2>
                <h3>{movie.fullplot}</h3>
            </div>
        </div>
    )

}