module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger',
      // columns
      {
        burger_name: {
          type: DataTypes.STRING,
        //   allowNull: false,
        //   validate: {
        //     is: ["^[a-z]+$",'i'],
        //   }
        },
        devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },

      },
      // options
      {
        underscored: true,
        freezeTableName: true,
        classMethods: {
          associate: function(models) {
            Burger.hasOne(models.Customer);
          }
        } // end classMethods
      }
    ) // end .define
  return Burger;
}