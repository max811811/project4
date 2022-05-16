const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const uploadedPDFsSchema = new Schema({
    url: {type: String, required: true},
    
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
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});
  

module.exports = mongoose.model('UploadedPDFs', uploadedPDFsSchema)