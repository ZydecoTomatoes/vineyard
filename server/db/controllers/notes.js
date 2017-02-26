import Notes from '../models/notes';

export const newNote = (params) => {
  console.log('inside newNote db controller');
  return new Notes({
    title: params.title,
    text: params.text,
    date_time: params.date_time,
    latitude: params.latitude,
    longitude: params.longitude,
    image_url: params.image,
    note_author_id: params.username
  }).save();
};

export const getAllNotes = () => {
  return Notes.forge().orderBy('date_time','DESC').fetchAll();
};

/*==================need to refactor to BS/KNX=======================*/
// const getNote = (req, res, next) => {};
// const updateNote = (req, res, next) => {};
// const deleteNote = (req, res, next) => {};
/*==================need to refactor to BS/KNX=======================*/
