import css from './MovieInfo.module.css';

const MovieInfo = ({movie}) => {

    const {title, id, original_title, popularity} = movie;

    return (
<div className={css.MovieInfo}>
                <div>
                <div>Title:{title}</div>
                <div>ID:{id}</div>
                <div>Original title:{original_title}</div>
                <div>Popularity:{popularity}</div>

        </div>
    </div>
    );
};

export {MovieInfo};