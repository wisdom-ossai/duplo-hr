const Referral = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.45001 4.71997L4.72998 1L1.01001 4.71997"
        stroke={active ? "#fff" : "#c4c4c4"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.72998 19V1"
        stroke={active ? "#fff" : "#c4c4c4"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.55 15.28L15.27 19L18.99 15.28"
        stroke={active ? "#fff" : "#c4c4c4"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.27 1V19"
        stroke={active ? "#fff" : "#c4c4c4"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Referral;
