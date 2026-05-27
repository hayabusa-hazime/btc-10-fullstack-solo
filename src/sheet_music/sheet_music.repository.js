function createSheet_musicRepository(knex, table = "sheet_music") {
  //後からユーザのデータでのクエリを実施する

  const list = async (musicId) => {
    // ここにコードを書いてください
    return await knex.select("*").from(table).where("music_id", musicId);
  };
  return { list };
}

module.exports = { createSheet_musicRepository };
