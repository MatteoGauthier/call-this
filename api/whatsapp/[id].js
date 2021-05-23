export default function ({ query: { id } }, res) {
    console.log(id)
	if (!id) {
		res.json({ error: "Add a number, /whatsapp/0000000000" });
		return;
	}
    res.redirect(`https://web.whatsapp.com/send?text=&phone=${id}`);
}
