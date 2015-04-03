'use strict';
var path = require('path');
var test = require('ava');
var wallpaper = require('./');

test(function (t) {
	t.plan(4);

	var orignalImagePath;

	wallpaper.get(function (err, imagePath) {
		orignalImagePath = imagePath;

		wallpaper.set('fixture.jpg', function (err) {
			t.assert(!err, err, '1');

			wallpaper.get(function (err, imagePath) {
				t.assert(!err, err, '2');
				t.assert(imagePath === path.resolve('fixture.jpg'), '3');

				wallpaper.set(orignalImagePath, function (err) {
					t.assert(!err, err, '4');
				});
			});
		});
	});
});
