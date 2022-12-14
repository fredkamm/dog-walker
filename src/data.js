import { FiMail, FiMapPin } from "react-icons/fi";

import Blank from "./assets/images/BlankProfile.png"

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

// reviews
export const reviews = [
  {
    authorImg: Blank,
    authorText:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    authorName: "John Doe",
    authorDog: "Labrador Retriever",
  },
  {
    authorImg: Blank,
    authorText:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    authorName: "Jane Doe",
    authorDog: "Golden Retriever",
  },
  {
    authorImg: Blank,
    authorText:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    authorName: "Jack Doe",
    authorDog: "Pitbull",
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
