/* jslint esversion:6 */

r = Math.round;
f = Math.floor;
p = (i)=>{ return (i<10) ? "0"+i : i; };
function granTurismo(zeroTo100, topSpeed, brakingDistance, x) {
	var k = (1000 / 3600);
	var s = 100 * k;
	var sc = 100 * k; // 100 km/h in m/s
	var s_top = topSpeed * k; // top speed in m/s
	var a_a = sc / zeroTo100; // acceleration
	console.log('Acceleration is ' + a_a + ' m/s^2');
	a_b = (sc * sc) / (2 * brakingDistance); // deceleration
	console.log('Deceleration is ' + a_b + ' m/s^2');
	t_top = 0;
	s = Math.sqrt(2*x*a_a*a_b/(a_a + a_b));
	s = s > s_top ? s_top : s;
	console.log('Top speed is ' + s);
	t_a = s / a_a; // time spent accelerating
	console.log('Time accelerating is ' + t_a);
	d_a = s * t_a * 0.5;
	console.log('Distance accelerating is ' + d_a + ' m');
	d_b = (s * s) / (2 * a_b);
	console.log('Distance braking is ' + d_b);
	t_b = 2 * d_b / s;
	console.log('Time braking is ' + t_b);
	d_t = x - (d_a + d_b);
	console.log('Runway length at top speed: ' + d_t);
	t_t = d_t / s;
	console.log('Time at top speed: ' + t_t);

	t = t_t + t_a;

	ms = r(1000 * (t - r(t)), 3);
	s = r(t) % 60;
	if (ms < 250){ ms = "000"; }
	if (ms > 250 && ms < 750){ ms = "500"; }
	if (ms >= 750){ ms = "000"; s++; }
	m = f(r(t) / 60);
	out = p(m) + ":" + p(s) + "." + ms;
	return out;
}
exports.granTurismo = granTurismo;

if (!module.parent){ granTurismo(5.6, 160, 92, 400); }