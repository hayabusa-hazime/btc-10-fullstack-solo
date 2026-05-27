function createMusicService(repository) {
  const list = async () => {
    return await repository.list();
  };

  return { list };
}

module.exports = { createMusicService };
