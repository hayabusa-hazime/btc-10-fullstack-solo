function createFingeringRepository(knex, table = "fingering") {
  //後からユーザのデータでのクエリを実施する

  const list = async () => {
    // ここにコードを書いてください
    return await knex.select("*").from(table);
  };
  return { list };
}

module.exports = { createFingeringRepository };
