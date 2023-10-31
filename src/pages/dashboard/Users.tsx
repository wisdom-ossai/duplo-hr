import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { TUser } from "@/types";
import { Card } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";
import { DataTable, TableRowAction } from "@/components";

const Users = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryRef = query(
      collection(db, "users"),
      where("role", "!=", "admin")
    );
    const fetchUsers = async () => {
      const payload: TUser[] = [];
      setLoading(true);
      try {
        const querySnapshot = await getDocs(queryRef);
        querySnapshot.forEach((doc) => {
          payload.push({ ...doc.data(), id: doc.id } as TUser);
        });
        setUsers(payload);
      } catch (error) {
        console.log(error);
        toast({
          title: "Unable to fetch Users",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
      const payload: TUser[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        payload.push({ ...doc.data(), id: doc.id } as TUser);
      });
      setUsers(payload);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  console.log(users);

  const columns: ColumnDef<TUser>[] = [
    {
      accessorKey: "fullName",
      header: "Name",
      cell: ({ row }) => (
        <div>
          {row.original.firstName} {row.original.lastName}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "designation",
      header: "Designation",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "action",
      // accessorKey: "action",
      // header: "",
      cell: ({ row }) => (
        <TableRowAction
          id={row.original.id}
          label="Assign Role"
          role={row.original.role}
        />
      ),
    },
  ];

  return (
    <Card className="p-4">
      <DataTable data={users} columns={columns} loading={loading} />
    </Card>
  );
};

export default Users;
