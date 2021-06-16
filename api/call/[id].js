export default function ({ query: { id } }, res) {
  if (!id) {
    res.json({ error: "Add a number, like /0000000000" })
    return
  }
  res.redirect(`tel://${id}`)
}
