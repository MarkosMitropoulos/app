const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const titlize = require('mongoose-title-case');

const UserSchema = new Schema({
	name: { type: String, required: true },
	username: { type: String, lowercase: true, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, lowercase: true, unique: true }
});

UserSchema.pre('save', function(next) {
	let user = this;
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

UserSchema.plugin(titlize, {
	paths: [ 'name' ]
});

UserSchema.methods.comparePassword = function(password, cb) {
	return bcrypt.compare(password, hash, (err, res) => {
		if (err) cb(err);
		cb(null, res);
	});
};

module.exports = mongoose.model('User', UserSchema);
