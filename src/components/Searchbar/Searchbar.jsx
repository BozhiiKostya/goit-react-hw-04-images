export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
        }}
        className="SearchForm"
      >
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
