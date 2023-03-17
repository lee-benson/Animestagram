import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
});

animeSchema.statics.findByKeyword = async function (keyword) {
  const url = `https://gogoanime.consumet.stream/search?keyw=${keyword}`;
  const response = await fetch(url);
  const data = await response.json();
  const anime = new this({
    title: data.title,
    poster: data.poster
  });
  return anime;
}

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;
