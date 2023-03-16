# Animestagram

## APP DESCRIPTION:
Ever mindlessly scroll through an anime website, conflicted by what you should spend your time on? Of course you have, you're time is valuable and it should be spent wisely. With this application, users, much like the first pioneers of unexplored lands, who have just watched an anime can make a review, comment and rating, and post it. Users' review lists will be displayed on the homepage and they'll also be able to navigate to a page that aggregates everyone's reviews. These reviews will give insights to which animes are worth your time. 

## API:
The API used for this project: https://gogoanime.consumet.stream/search

## API SNIPPET:
GET https://gogoanime.consumet.stream/search?keyw={animeName}


``` json 
[
  {
  animeId: "naruto",
  animeTitle: "Naruto",
  animeUrl: "https://gogoanime.film///category/naruto",
  animeImg: "https://gogocdn.net/images/anime/N/naruto.jpg",
  status: "Released: 2002"
  },
  {
  animeId: "naruto-dub",
  animeTitle: "Naruto (Dub)",
  animeUrl: "https://gogoanime.film///category/naruto-dub",
  animeImg: "https://gogocdn.net/cover/naruto-dub.png",
  status: "Released: 2002"
  },
  {
  animeId: "naruto-shippuden",
  animeTitle: "Naruto Shippuden",
  animeUrl: "https://gogoanime.film///category/naruto-shippuden",
  animeImg: "https://gogocdn.net/images/anime/naruto_shippuden.jpg",
  status: "Released: 2007"
  },
  {
  animeId: "naruto-shippuuden-dub",
  animeTitle: "Naruto Shippuden (Dub)",
  animeUrl: "https://gogoanime.film///category/naruto-shippuuden-dub",
  animeImg: "https://gogocdn.net/cover/naruto-shippuuden-dub.png",
  status: "Released: 2007"
  }
]
```

## API CODE: 

``` js
async function getAnime(animeName) { 
  const res = await fetch('ttps://gogoanime.consumet.stream/search?keyw={animeName}');
  const json = res.json();
  console.log(json);
}

// E.g.

getAnime('naruto')
```


## WIREFRAMES: 

![IMG_1498](https://user-images.githubusercontent.com/114048369/225667180-f3e592a5-f85e-40b6-bb1e-cf83ae190dc5.jpeg)

![IMG_1499](https://user-images.githubusercontent.com/114048369/225667320-8a0c1d49-c13c-42b5-8128-8d39042eb90f.jpeg)

![IMG_1500](https://user-images.githubusercontent.com/114048369/225667361-b97d20dc-821b-4b7b-97cd-559b6cde2c16.jpeg)

![IMG_1501](https://user-images.githubusercontent.com/114048369/225667399-65861389-4391-46a6-9a48-883ce6a4758a.jpeg)

![IMG_1502](https://user-images.githubusercontent.com/114048369/225667480-12cc818d-a5a0-4a95-a9f8-50f15c15769a.jpeg)

## MVP:
### Planning <!-- omit in toc -->

- Have a thoroughly documented `Team Expectations` Google document / markdown file.
- Have a **thoroughly** developed, **beautiful** `README.md` file.
- Take time for each team member to discuss where they feel strongest and weakest, in terms of coding ability.
- Create a Whimsical document to convey the data flow with component hierarchy included.

### Collaboration <!-- omit in toc -->

- Contribute equally.
- Have a solid understanding of the _entire_ project. (Even the features implemented by other team members.)
- Take time to pair program with teammates to reinforce learning.
- Be prepared to explain sections of code that were written by teammates.

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app client`
  - Have at least 6 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Authentication!

### Server (Back End) <!-- omit in toc -->

- Have working generic controller actions for CRUD using Express, Mongoose, and MongoDB.
- Authentication!

### Styling <!-- omit in toc -->

- Be styled with CSS.
- Use flexbox (`display: flex`) or CSS Grid.
- Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names and follow naming conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes/comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Vercel.
- Deploy the back-end via Vercel.
- Deploy the MongoDB database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Procedural <!-- omit in toc -->

- Have _frequent_ commits from _every_ team member dating back to the _very beginning_ of the project. These commits should total to or exceed _50_.
- Use _effective_ and _safe_ branching and merging processes.

