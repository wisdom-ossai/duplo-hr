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

export type User = TCreateUser & {
  isActive: boolean;
  photoUrl: string;
  role: "admin" | "user" | "hr";
};
