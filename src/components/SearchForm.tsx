import React from "react";

import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search for startups, investors, and more..."
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button type="submit" className="search-btn text-white">
          <SearchIcon />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
