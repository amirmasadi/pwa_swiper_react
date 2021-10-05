import {
  AiOutlineInfoCircle,
  AiOutlineMessage,
  AiOutlineCode,
  AiOutlineFieldNumber,
  AiOutlineDotChart,
} from "react-icons/ai";

const ITEMSDATA = [
  {
    title: "About Me",
    icon: <AiOutlineInfoCircle fontSize="3rem" />,
    id: 1,
    sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem aut reiciendis enim qui cupiditate eius dolores possimus?",
    to: "about",
    hoverd: false,
  },
  {
    title: "Contact Me",
    icon: <AiOutlineMessage fontSize="3rem" />,
    id: 2,
    sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem aut reiciendis enim qui cupiditate eius dolores possimus?",
    to: "contact",
    hoverd: false,

  },
  {
    title: "Projects",
    icon: <AiOutlineCode fontSize="3rem" />,
    id: 3,
    sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem aut reiciendis enim qui cupiditate eius dolores possimus?",
    to: "projects",
    hoverd: true,

  },
  {
    title: "I Dont know",
    icon: <AiOutlineFieldNumber fontSize="3rem" />,
    id: 4,
    sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem aut reiciendis enim qui cupiditate eius dolores possimus?",
    hoverd: false,

  },
  {
    title: "no idea",
    icon: <AiOutlineDotChart fontSize="3rem" />,
    id: 5,
    sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem aut reiciendis enim qui cupiditate eius dolores possimus?",
    hoverd: false,
  },
];

export default ITEMSDATA;
