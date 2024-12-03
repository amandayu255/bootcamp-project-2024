export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "So much HW",
    date: "10-19-2024",
    description: "Getting a lot of homework and projects",
    image:
      "/images/homework.jpg",
    imageAlt: "Homework everywhere",
    slug: "so-much-hw",
  },
  {
    title: "Working on senior project",
    date: "10-21-2024",
    description: "Creating a game for my senior project",
    image:
      "/images/senior-project.jpg",
    imageAlt: "Video Game Design",
    slug: "working-on-senior-project",
  },
];

export default blogs;
