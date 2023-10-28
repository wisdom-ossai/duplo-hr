import { Button, Metric, Subtitle, TextInput } from "@tremor/react";
import { Search } from "./icons";

const Navbar = () => {
  return (
    <nav className="flex items-center pt-4 pb-8 justify-between">
      <div className="flex-auto">
        <Metric>Dashboard</Metric>
        <Subtitle>Hello Thomas. Welcome to Galucter</Subtitle>
      </div>
      <div className="flex items-center gap-0 justify-center flex-1">
        <TextInput className="border rounded-e-none" />
        <Button variant="primary" size="xs" className="rounded-s-none">
          <Search />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
