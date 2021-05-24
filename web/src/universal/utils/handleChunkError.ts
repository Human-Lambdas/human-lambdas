const handleChunkError = (error) => {
  if (error.toString().indexOf('ChunkLoadError') > -1) {
    console.log('[ChunkLoadError] Reloading due to error')
    window.location.reload(true)
  }
}

export default handleChunkError
