"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import "./movies.css";

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like)
  }

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[90px] text-center">
      <button
        className={`like-button ${like ? "like" : ""}`}
        onClick={toggleLike}
      > 
        <FontAwesomeIcon icon={like ? solidHeart : regularHeart} />
      </button>
      <Link href={`/movies/${movie._id}`}>
        {movie.poster && !imageError ? (

            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[135px] object-cover rounded-md"
              onError={handleImageError}
            />
        ) : (
          <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-600 text-center">{movie.title}</span>
          </div>
        )}
        <p className="text-xs mt-1 truncate">{movie.title}</p>
        <p className="text-xs mt-1 truncate">{movie.year}</p>
      </Link>
    </div>
  );
}