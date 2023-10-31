import { User } from "firebase/auth";

export type TStatData = {
  name: string;
  value: number;
  totalPercentage: number;
  newPercent: number;
  color: string;
};

export type TCreateUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  designation: string;
};

export type TUser = User &
  TCreateUser & {
    isActive: boolean;
    photoUrl: string;
    role: "admin" | "user" | "hr";
    id: string;
  };
