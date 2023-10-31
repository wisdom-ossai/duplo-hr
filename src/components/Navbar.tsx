import { useAuth } from "@/contexts/AuthProvider";
import SearchInput from "./SearchInput";
import { Button } from "./ui";
import { AlignLeft, AlignRight } from "lucide-react";

const Navbar = ({
  toggleLeft,
  toggleRight,
}: {
  toggleLeft: () => void;
  toggleRight: () => void;
}) => {
  const { user } = useAuth();
  return (
    <nav className="flex items-start pb-8 justify-between">
      <div className="flex-auto flex items-start gap-4">
        <Button
          variant="ghost"
          className="block md:hidden"
          onClick={toggleLeft}
        >
          <AlignRight />
        </Button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
          <small className="text-gray-200">
            Hello {user?.firstName}. Welcome to Galucter
          </small>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-4">
        <SearchInput />
        <Button
          variant="ghost"
          className="block md:hidden"
          onClick={toggleRight}
        >
          <AlignLeft />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
