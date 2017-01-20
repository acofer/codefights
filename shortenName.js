/* jslint esversion:6 */
function ShortenNameLong(name) {
	sp = name.split(", ");
	sn = sp[0];
	nm = sp[1].split(" ");
	l = nm.length;
	if (l <= 1){ return name; }
	m = l - 1;
	nm[m] = nm[m][0] + ".";
	nmm = nm.join(" ");
	return `${sn}, ${nmm}`;
}

ShortenName = n => n.replace(/(?!,).{1}\s(\w+)$/, m=>m.slice(0,3)+".");

console.log(ShortenName("Placedo, Silver Van"));
console.log(ShortenName("Aguilar, Ventura"));
