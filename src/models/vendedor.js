const connection = require("../database/connection");
module.exports = {
  async create() {
    const result = await connection("vendedor").insert(vendedor);
    return result;
  },
  async getById({ vendedor_id }) {
    const result = await connection("vendedor")
      .where( {vendedor_id} )
      .select("nome");
      return result;
  },
  async updateById(vendedor_id){
    const result = await connection("vendedor")
    .where( {vendedor_id }).update(nome);
    return result;
  },
  async deleteById(vendedor_id){
      const result = await  connection ("vendedor").where({vendedor_id}).delete();
      return result;
  },
};
