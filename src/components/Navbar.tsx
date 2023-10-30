import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="flex items-start pb-8 justify-between">
      <div className="flex-auto">
        <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
        <small className="text-gray-200">
          Hello Thomas. Welcome to Galucter
        </small>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Navbar;
