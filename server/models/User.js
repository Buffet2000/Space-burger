const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  diskSpace: { type: Number, default: 1024**3*10 },
  usedSpace: { type: String, default: 0 },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: 'File' }],
})

module.exports = model('User', User)

// "success": true,
//     "accessToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWQ5OTNiOTdlZGUwMDAxZDA2MDQyYSIsImlhdCI6MTcyMDEyMzM0MywiZXhwIjoxNzIwMTI0NTQzfQ.pPPU2mEO62DdzRqlsYgjzG91bdbri4uW71rHfEZOOCU",
//     "refreshToken": "aac9627c5774cf942e8dcf0bca8dfa57b44e759e4db64b9e49a0428ae260167b2be922b871afd7e1",
//     "user": {
//         "email": "faster_mail@mail.ru",
//         "name": "Juri"
//     }