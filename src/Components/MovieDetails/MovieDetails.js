
const MovieDetails = ({movie}) => {

    const {title, id, original_title, overview, popularity, release_date, vote_average, vote_count} = movie;

    return (
        <div>
                <div>Title:{title}</div>
                <div>ID:{id}</div>
                <div>Original title:{original_title}</div>
                <div>Overview:{overview}</div>
                <div>Popularity:{popularity}</div>
                <div>Release date:{release_date}</div>
                <div>Vote average:{vote_average}</div>
                <div>Vote count:{vote_count}</div>

        </div>
    );
};

export {MovieDetails};