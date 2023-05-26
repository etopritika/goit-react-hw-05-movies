import { Input, Form } from "./SearchForm.styled";

export default function SearchForm({handleSubmit, movieName, handleInputChange}) {
    return (
        <>
          <Form onSubmit={handleSubmit}>
            <Input
              value={movieName}
              name="query"
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </Form>
        </>
      );
}