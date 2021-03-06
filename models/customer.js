module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer',
      // columns
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          }
        },

      },
      // options
      {
        underscored: true,
        freezeTableName: true,
        classMethods: {
          associate: function(models) {
            Customer.belongsTo(models.Burger);
          }
        } // end classMethods
      }
    ) // end .define
  return Customer;
}