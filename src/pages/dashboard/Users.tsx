import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
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
import { User } from "@/types";
import { TableRowAction } from "@/components/TableRowAction";
import { Card } from "@/components/ui";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryRef = query(
      collection(db, "users"),
      where("role", "!=", "admin")
    );
    const fetchUsers = async () => {
      const payload: User[] = [];
      setLoading(true);
      try {
        const querySnapshot = await getDocs(queryRef);
        querySnapshot.forEach((doc) => {
          payload.push({ ...doc.data(), id: doc.id } as User);
        });
        setUsers(payload);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
      const payload: User[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        payload.push({ ...doc.data(), id: doc.id } as User);
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

  const columns: ColumnDef<User>[] = [
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
