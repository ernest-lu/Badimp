export default function ParseId(id) {
	var res = "";
	id.split('-').forEach(str => {
		res += str.charAt(0).toUpperCase() + str.slice(1);
		res += " ";
	})
	return res.trimEnd();
}