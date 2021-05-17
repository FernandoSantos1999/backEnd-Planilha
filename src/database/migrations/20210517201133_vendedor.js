
exports.up = function(knex) {
    return knex.schema.createTable("vendas",function(table){
       table.string('vendas_id').primary().notNullable();
       table.date('data').notNullable();
       table.string('categoria').notNullable();
       table.string('vendedor_id').notNullable();
       table.foreign('vendedor_id').references('vendedor_id').inTable('vendedor').onDelete("cascade");
   });
 
};

exports.down = function(knex) {
   return knex.schema.dropTable("vendas");
 
};
