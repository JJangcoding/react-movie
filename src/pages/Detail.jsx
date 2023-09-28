import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import "../style/detail.css"
export default function Detail() {
    const { DOCID } = useParams();



    // DOCID를 사용하여 해당 영화를 찾음
    const movie = dummy.Data[0].Result.find((item) => item.DOCID === DOCID);

    if (!movie) {
        // 영화를 찾을 수 없을 경우 처리
        return <div>Movie not found</div>;
    }

    const actors = movie.actors.actor
        .filter((actor) => actor.actorNm) // 빈 값을 필터링
        .map((actor) => actor.actorNm) // 배우 이름만 추출
        .join(", ");

    return (

        <div>
            <div className="movie-details">
                <div className="movie-details-header">
                    <img src={movie.posters.split("|")[0].trim()} alt={movie.title} />
                    <div className="movie-info">
                        <h1>{movie.title}</h1><br/>
                        <p>평점: {movie.rating}</p><br/>
                        <p>장르: {movie.genre}</p><br/>
                        <p>감독: {movie.directors.director[0].directorNm}</p><br/>
                        <p>출연 배우: {actors}</p><br/>
                    </div>
                </div>
                <div className="movie-plot">
                    <h2>줄거리</h2><br/>
                    <p>{movie.plots.plot[0].plotText}</p>
                </div>
            </div>
        </div>
    );
}
