import { FiMail, FiMapPin } from "react-icons/fi";

import { GiSittingDog } from "react-icons/gi"
import { IoPawOutline } from "react-icons/io5"
import { TfiNotepad, TfiHome } from "react-icons/tfi"

import Blank from "./assets/images/BlankProfile.png"
import Dog1 from "./assets/images/dog1.jpeg"
import Dog2 from "./assets/images/dog2.jpeg"
import Dog3 from "./assets/images/dog3.jpeg"
import Dog4 from "./assets/images/dog4.jpeg"
import Dog5 from "./assets/images/dog5.jpeg"

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
    icon: <GiSittingDog />,
    description: 'Specialize in dog walking and in-home pet sitting for cats and dogs while you’re away.',
  },
  {
    icon: <IoPawOutline />,
    description: 'My time and attention are focused on your pet and all visits are tailored to yours and your pets needs.',
  },
  {
    icon: <TfiNotepad />,
    description: 'A handwritten note is left after each visit with details of your pet and sitters time together.',
  },
  {
    icon: <TfiHome />,
    description: 'While pet sitting, I will keep a watchful eye on your home, bring in the newspapers and mail, and water the plants while you’re away!',
  },
];

// gallery
export const gallery = [
  {
    authorImg: Dog1,
  },
  {
    authorImg: Dog2,
  },
  {
    authorImg: Dog3,
  },
  {
    authorImg: Dog4,
  },
  {
    authorImg: Dog5,
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
