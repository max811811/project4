const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const uploadedPDFsSchema = new Schema({
    blobURL: {type: String, required: true},
    
}, 
{
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
          delete ret.password;
          return ret;
        }
    }
});

uploadedPDFsSchema.pre('save', async function(next) {
    
    
    return next();
});
  

module.exports = mongoose.model('UploadedPDFs', uploadedPDFsSchema)
