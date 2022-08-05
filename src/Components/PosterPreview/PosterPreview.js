import css from './Poster.module.css';

const PosterPreview = ({posterUrl, title}) => {

    return (
        <div className={css.Poster}>
            {
                <img id="img" src={`http://image.tmdb.org/t/p/w500${posterUrl}?api_key=a4eb978883c83072d544d2e3ccd7ca2f`} alt={title}/>
            }
        </div>
    );
};

export {PosterPreview};