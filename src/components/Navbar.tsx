import { useAuth } from "@/contexts/AuthProvider";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="flex items-start pb-8 justify-between">
      <div className="flex-auto">
        <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
        <small className="text-gray-200">
          Hello {user?.firstName}. Welcome to Galucter
        </small>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Navbar;
