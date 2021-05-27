const mix = require("laravel-mix");

mix
	.sass("resources/sass/ianatek.scss", "assets/css")
	.ts("resources/js/layout.ts", "assets/js")
	// .sass("resources/sass/vendor/bootstrap-icons.scss", "assets/css")