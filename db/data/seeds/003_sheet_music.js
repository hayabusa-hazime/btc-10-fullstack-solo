/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("sheet_music").del();
  await knex("sheet_music").insert([
    { music_id: 1, dilay: 4, note: "ソ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "四分休符", octave: 1 },
    { music_id: 1, dilay: 4, note: "ソ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "四分休符", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ド", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ド", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ファ", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ファ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ソ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ソ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ソ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ファ", octave: 1 },
    { music_id: 1, dilay: 4, note: "ミ", octave: 1 },
    { music_id: 1, dilay: 4, note: "レ", octave: 1 },
    { music_id: 1, dilay: 2, note: "ド", octave: 1 },
  ]);
};

// {music_id:1,
// dilay:,
// note:,
// octave:,}
// 四分音符4
// 二分音符2
