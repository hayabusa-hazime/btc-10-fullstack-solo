function createMusicRepository(knex, table = "music") {
  //後からユーザのデータでのクエリを実施する

  const list = async () => {
    // ここにコードを書いてください
    return await knex.select("*").from(table);
  };
  return { list };
}

module.exports = { createMusicRepository };
