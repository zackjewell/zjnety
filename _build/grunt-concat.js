module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-contrib-concat" );

	grunt.config( "concat", {
		options: {
			banner: '<%= banner %>'
		},
		css: {
			src: [
				'_src/_assets/css/type.css',
				'_src/_assets/css/globals.css',
				'_src/_assets/css/normalize.css',
				'_src/_assets/css/layout.css'
				
			],
			dest: '_site/_assets/css/all.css'
		}
	});
};