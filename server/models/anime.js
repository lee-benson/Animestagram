import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  animeTitle: String,
  animeImg: String,
});


export default mongoose.model('Anime', animeSchema);
