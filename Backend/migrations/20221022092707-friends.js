'use strict';

var dbm;
var type;
var seed;


exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    'friends',
    {
      columns: {
        id: 
        {
          type: 'int',
          primaryKey: true,
          autoIncrement: true,
          notnull: true
        },
        name: 
        {
          type: 'string',
          unique: true
        },
        email: {
          type: 'string',
          unique: true
        },
        comment: {
          type: 'string'
        },
        favFood: {
          type:'string',
          notnull: true
        },
        relationshipStatus: {
          type:'string',
          notnull: true
        }
      },
      ifNotExists: true
    },
    callback,
  )
};

exports.down = function(db, callback) {
  db.dropTable('friends', callback)
};

exports._meta = {
  "version": 1
};
