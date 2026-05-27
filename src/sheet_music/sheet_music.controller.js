function createSheet_musicController(service) {
  const list = async (req, res) => {
    console.log(req);
    const musicId = req.params.music_id;
    const result = await service.list(musicId);
    res.status(200).json({ data: result });
  };

  return { list };
}

module.exports = { createSheet_musicController };
