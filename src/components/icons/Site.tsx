const Site = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.99 9.71C20.65 9.57 20.2 9.5 19.64 9.5H14.36C12.62 9.5 12 10.12 12 11.88V19.62C12 20.2 12.07 20.65 12.22 21C12.53 21.72 13.19 22 14.36 22H19.64C21.38 22 22 21.37 22 19.62V11.88C22 10.69 21.72 10.02 20.99 9.71ZM18 19.75H16C15.98 19.75 15.95 19.75 15.93 19.74C15.78 19.73 15.65 19.68 15.54 19.58C15.36 19.45 15.25 19.24 15.25 19C15.25 18.59 15.59 18.25 16 18.25H18C18.41 18.25 18.75 18.59 18.75 19C18.75 19.41 18.41 19.75 18 19.75Z"
        fill={active ? "#fff" : "#c4c4c4"}
      />
      <path
        d="M20.99 6.19V7C20.99 7.55 20.54 8 19.99 8H14.36C11.8 8 10.5 9.31 10.5 11.88V21C10.5 21.55 10.05 22 9.5 22H7.55C7.15 22 6.83 21.68 6.83 21.29C6.83 20.89 7.15 20.58 7.55 20.58H9.5V16.75H6C3.78 16.64 2.01 14.81 2.01 12.56V6.19C2.01 3.88 3.89 2 6.21 2H16.8C19.11 2 20.99 3.88 20.99 6.19Z"
        fill={active ? "#fff" : "#c4c4c4"}
      />
    </svg>
  );
};

export default Site;