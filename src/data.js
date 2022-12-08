import { FiMail, FiMapPin } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "rates",
    href: "rates",
  },
  {
    name: "gallery",
    href: "gallery",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Send me an E-mail",
    description: "abc123@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    subtitle: "Bucks County, Pennsylvania",
    description: "Serving clients in Bucks County Area",
  },
];
