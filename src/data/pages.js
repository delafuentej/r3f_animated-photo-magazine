import { pictures } from "./pictures";

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
    // front: pictures[i],
    // back: pictures[i + 1],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});
