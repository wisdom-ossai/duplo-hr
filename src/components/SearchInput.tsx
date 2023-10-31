import React from "react";
import { Button, Input } from "@/components/ui";
import { Search } from "@/components/icons";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-0 justify-center flex-1">
      <Input
        className="border rounded-e-none shadow-none dark:shadow-none bg-white border-none focus-visible:ring-0"
        placeholder="Search by anything"
      />
      <Button className="rounded-s-none rounded-e-xl focus:outline-none px-2">
        <Search />
      </Button>
    </div>
  );
};

export default SearchInput;
