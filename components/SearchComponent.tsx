import Form from "next/form";

const SearchComponent = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false}>
      <input
        name="query"
        defaultValue={query}
        className="border py-1 px-2 rounded-sm"
        placeholder="იპოვეთ ივენთი"
      />
    </Form>
  );
};

export default SearchComponent;
