export default function SearchForm({handleSubmit, movieName, handleInputChange}) {
    return (
        <>
          <form onSubmit={handleSubmit}>
            <input
              value={movieName}
              name="query"
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </form>
        </>
      );
}