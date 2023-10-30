import { Button, Label } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const roleOptions = [
  {
    label: "HR",
    value: "hr",
  },
  {
    label: "User",
    value: "user",
  },
];

export function TableRowAction({
  id,
  role,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title?: string;
  role: string;
  description?: string;
}) {
  const [value, setValue] = useState(role);
  const [open, setOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const handleOpenChange = () => {
    setOpen(!open);
  };
  const handleSubmit = async () => {
    setProcessing(true);
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { role: value });

      handleOpenChange();
    } catch (error) {
      console.log(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-blue" size="sm">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title ?? label}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="name">Role</Label>
            <Select onValueChange={(e) => setValue(e)} value={value}>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => handleSubmit()}
            variant="default"
            disabled={processing}
          >
            {processing ? "Please wait..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
