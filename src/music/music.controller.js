function createMusicController(service) {
  const list = async (req, res) => {
    const result = await service.list();
    res.status(200).json({ data: result });
  };

  return { list };
}

module.exports = { createMusicController };
