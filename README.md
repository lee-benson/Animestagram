# Animestagram

## APP DESCRIPTION:
Ever mindlessly scroll through an anime website conflicted by what you should spend your time on? Of course you have! Your time is valuable and it should be spent wisely. With this application users, much like the first pioneers of unexplored lands, who have just watched an anime can make a review, comment, and rating and post it. Users' review lists will be displayed on their profile page and they'll also be able to navigate to a page that aggregates everyone's reviews. These reviews will give insights to which animes are worth your time. 

## API:
The API used for this project: https://gogoanime.consumet.stream/search

## API SNIPPET:
GET https://gogoanime.consumet.stream/search?keyw={animeName}


``` json 
[
  {
  "animeId": "naruto",
  "animeTitle": "Naruto",
  "animeUrl": "https://gogoanime.film///category/naruto",
  "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
  "status": "Released: 2002"
  },
  {
  "animeId": "naruto-dub",
  "animeTitle": "Naruto (Dub)",
  "animeUrl": "https://gogoanime.film///category/naruto-dub",
  "animeImg": "https://gogocdn.net/cover/naruto-dub.png",
  "status": "Released: 2002"
  },
  {
  "animeId": "naruto-shippuden",
  "animeTitle": "Naruto Shippuden",
  "animeUrl": "https://gogoanime.film///category/naruto-shippuden",
  "animeImg": "https://gogocdn.net/images/anime/naruto_shippuden.jpg",
  "status": "Released: 2007"
  },
  {
  "animeId": "naruto-shippuuden-dub",
  "animeTitle": "Naruto Shippuden (Dub)",
  "animeUrl": "https://gogoanime.film///category/naruto-shippuuden-dub",
  "animeImg": "https://gogocdn.net/cover/naruto-shippuuden-dub.png",
  "status": "Released: 2007"
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

## DATA MODEL:

![image](https://user-images.githubusercontent.com/114048369/225740637-a3ca971b-9f12-4236-8fca-00117f6925ff.png)


## COMPONENT TREE:

![image](https://user-images.githubusercontent.com/114048369/225740800-3abe4a8e-88df-4b5d-a155-d34eaf3168dc.png)


## ROUTING TABLE:

| Route                | HTTP Method | DB Action | Description             |
| -----------          | ----------- | --------- | ----------------------- |
| /api/                | GET         | INDEX     | Indexes all reviews     |
| /api/profile         | GET         | INDEX     | Indexes your reviews    |
| /api/                | POST        | CREATE    | Create a review         |
| /api/:anime          | GET         | SHOW      | Shows the anime reviews |
| /api/profile/:anime  | PUT         | UPDATE    | Update a review         |
| /api/delete          | DELETE      | DELETE    | Delete a review         |


## WIREFRAMES: 

<img width="997" alt="Screenshot 2023-03-16 at 4 03 55 PM" src="https://user-images.githubusercontent.com/114048369/225740402-aea6a81d-d4c1-4982-8187-e4cfefc95680.png">

<img width="1114" alt="Screenshot 2023-03-23 at 10 17 02 AM" src="https://user-images.githubusercontent.com/114048369/227234443-412a4a79-571c-4b39-a35c-e3e6f104117a.png">


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

### MVP Components

- [] Navigation bar which has a homepage, profile page, and search bar (search bar interface).
- [] Component that displays username, anime title, and rating. Below the image, comment, and other users' comments are rendered. 
- [] On the profile page, the component displayes the review.
- [] Routes/links to the aforementioned components.

### POST MVP: 
- [] Search bar functionality is fleshed out.
- [] User comments on other users' reviews are implemented.

### GOALS:

- [] Day 1: Get the project off the ground: proposal, notion, repo, etc.
- [] Day 2: Authentication/flesh out backend.
- [] Day 3: Developing components (NavBar & Post).
- [] Day 4: Developing components (New Post & Edit/Delete).
- [] Day 5: Formatting CSS.
- [] Day 6: Formatting CSS (Cont.) & Post-MVP.
- [] Day 7: Finalizing details (Git, Github, Vercel).

### TEAM COLLABORATION DETAILS:

* Notion Board: https://www.notion.so/invite/ac3f550bcdfe5281f20f28c717a540f3014bcf84
* Team Expectations: https://docs.google.com/document/d/1LAV8PqCGaCTmK-rNXKz21HYIXeFoeuQNztlgxAH-2w8/edit?usp=sharing
* Team Theme Song: https://open.spotify.com/track/78ZzF9pK3foniEnK64XzX5?si=Fxwua-gqRIu6rm63z03KNw
