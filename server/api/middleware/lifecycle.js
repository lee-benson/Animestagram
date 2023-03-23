export default function lifecycle({ setup, cleanup }) {
  return async (req, res, next) => {
    const props = await setup()
    res.on('finish', async () => await cleanup(props))
    next()
  }
}