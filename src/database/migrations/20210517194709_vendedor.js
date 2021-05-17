
exports.up = function(knex) {
    return knex.schema.createTable("vendedor",function(table){
        table.string('vendedor_id').primary().notNullable();
        table.string('nome').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("vendedor");
  
};
