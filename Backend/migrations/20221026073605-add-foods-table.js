'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    'foods',
    {
      columns: {
        id: {
          type: 'int',
          primaryKey: true,
          autoIncrement: true,
          notNull: true,
        },
        name: {
          type: 'string',
          notNull: true,
        },
        idOfFriend: {
          type: 'int',
          notNull: true,
          foreignKey: {
            name: 'fk_foods_idOfFriend',
            table: 'friends',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT',
            },
            mapping: {
              idOfFriend: 'id',
            }
          }
        }
      },
      ifNotExists: true,
    },
    callback,
  );
};

exports.down = function(db, callback) {
  db.dropTable('foods', callback);
};

exports._meta = {
  "version": 1
};
