// import { Person4, Person5, Person6 } from "@/components/icons/Person1";
import Safari from "@/components/icons/Safari";
import Slack from "@/components/icons/Slack";
import Sportify from "@/components/icons/Sportify";
import Twitch from "@/components/icons/Twitch";

export const messagesData = [
  {
    name: "Cameron Williamson",
    avatar: "",
    fallback: "CW",
    description: "Have you planned any deadline...",
  },
  {
    name: "Jacob Jones",
    avatar: "",
    fallback: "JJ",
    description: "The candidate has been shortlisted",
  },
];

export const jobsData = [
  {
    name: "Product Designer",
    avatar: "",
    fallback: <Sportify />,
    description: "Spotify, Singapore - 6 hours ago",
  },
  {
    name: "iOS Developer",
    avatar: "",
    fallback: <Safari />,
    description: "San Fransisco, CA - 2 Days ago",
  },
  {
    name: "Brand Strategist",
    avatar: "",
    fallback: <Slack />,
    description: "New york, US - 2 Days ago",
  },
  {
    name: "Jr Frontend Engineer",
    avatar: "",
    fallback: <Twitch />,
    description: "Spotify, Singapore - 2 Days ago",
  },
];

export const filterOptions = [
  {
    label: "All Activity",
    value: "all",
  },
  {
    label: "Applying",
    value: "applying",
  },
  {
    label: "Creation",
    value: "creation",
  },
];

export const feedsData = [
  {
    id: "1",
    actor: "Marvin Mckinney",
    subject: "Product Designer",
    activity: "applying",
    createdAt: new Date(),
    avatar: "",
  },
  {
    id: "2",
    actor: "John Cooper",
    subject: "Job Hunt",
    activity: "creation",
    createdAt: new Date(),
    avatar: "assets/person1.png",
  },
  {
    id: "3",
    actor: "Johnny Wilson",
    subject: "Frontend Engineer",
    activity: "applying",
    createdAt: new Date(),
    avatar: "/assets/person1.png",
  },
];
