const User = require('./User');
const Accomodation = require('./Accomodation');

User.hasMany(Accomodation, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Accomodation.belongsTo(User, {
  foreignKey: 'userId'
});
