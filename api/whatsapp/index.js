export default function ({ query: { id } }, res) {
	if (!id) {
		res.json({ error: "Add a number, like whatsapp/0000000000" });
		return;
	}
    res.redirect(`https://web.whatsapp.com/send?text=&phone=${id}`);


    
}
