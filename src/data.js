import { FiMail, FiMapPin } from "react-icons/fi";

import { FaDog, FaPaw } from "react-icons/fa"
import { GrNotes } from "react-icons/gr"

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

// services
export const services = [
  {
    icon: <FaDog />,
    description: 'Specialize in dog walking and in-home pet sitting for cats and dogs while you’re away.',
  },
  {
    icon: <FaPaw />,
    description: 'Our time and attention are focused on your pet and all visits are tailored to yours and your pets needs.',
  },
  {
    icon: <GrNotes />,
    description: 'A handwritten note is left after each visit with details of your pet and sitters time together.',
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
  {
    authorImg: Blank,
    authorText:
      "Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    authorName: "Jack Doe",
    authorDog: "Pitbull",
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
