function createSheet_musicService(repository) {
  const list = async (musicId) => {
    return await repository.list(musicId);
  };

  return { list };
}

module.exports = { createSheet_musicService };
