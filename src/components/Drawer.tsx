import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { PanelRight } from "lucide-react";

const Drawer = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <PanelRight />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Human R.</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetContent>{children}</SheetContent>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
