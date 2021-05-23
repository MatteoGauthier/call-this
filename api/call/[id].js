export default function ({ query: { id } }, res) {
    console.log(id)
	if (!id) {
		res.json({ error: "Add a number, /0000000000" });
		return;
	}
	res.redirect("tel://", id);
}
