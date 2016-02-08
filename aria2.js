
const run_cmd = require('./run_cmd');

module.exports = {
	launch: function(secret, http_user, http_passwd) {
		run_cmd.execute( "bin/1.19.3/aria2c", [
			"--enable-rpc",
			"--rpc-listen-all",
			//"--rpc-secret=" + secret,
			//"--http-user=" + http_user,
			//"--http-passwd=" + http_passwd,
			//"--daemon"
		], function(text) { console.log (text) });
	},
	quit() {
		run_cmd.execute( "pkill", [
			"aria2"
		], function(text) { console.log (text) });
	}
}
