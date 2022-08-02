export default function ParseId(id) {
	var res = "";
	if (!id) return res;
	id.split('-').forEach(str => {
		res += str.charAt(0).toUpperCase() + str.slice(1);
		res += " ";
	})
	return res.trimEnd();
}