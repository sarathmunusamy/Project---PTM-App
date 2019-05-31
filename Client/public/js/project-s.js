$(document).ready(function () {

	var walkAnimation = new TimelineMax();
	LunchAnimation(walkAnimation);

	var tanker = $('#tanker');
	var tanker_leftWheel = $('#tanker_leftwheel');
	var tanker_rightWheel = $('#tanker_rightwheel');
	var tanker_ball = $('#tanker_ball');
	var tanker_top = $('#tanker_top');
	var tanker_cap = $('#tanker_cap');

	// angel variables.
	var leftEye = $("#angel_leftEye");
	var angel_rightEye = $("#angel_rightEye");

	var angel_frontWings = $('#angel_frontWings');

	var left_angel = $('#left_angel');

	var rocket = $('#rocket');

	var rocket_burner = $('#rocket_burner');

	var tween_options_to = {
		css: {
			rotation: 360,
			transformOrigin: 'center center'
		},
		ease: Power0.easeNone,
		force3D: true,
		repeat: -1
	};

	//tanker_top.hide();
	walkAnimation

		// Temp code.
	//	.set(angel_fullBody, { alpha: 0 }, 0)
	//	.set(tanker, { alpha: 0 })

		// end


		//.fromTo(angel_rightEye, 0.1, { alpha: 1}, { alpha: 0, repeat: -1, yoyo: true,repeatDelay: 2.58 }, 0)
	//	.fromTo(angle_frontWings, 0.5, { scaleY: 1, transformOrigin: "0% 100%" },
	//		{ scaleY: 0.8, repeat: -1, transformOrigin: "0% 100%", yoyo: true })

		//		.to(rocket, 1, { rotation: 90, x: +150, transformOrigin: "50% 200px" }, 0)

		.to(rocket, 0.5, {
			bezier: {
				values: [{
					x: 100,
					y: -20
				}]
			}
		}, 0)

		.to(rocket, 1, { rotation: 45, transformOrigin: "50% 200px" }, 0)
		.fromTo(rocket_burner, 0.1, { scaleY: 2.0, transformOrigin: "100% 0%" }, { scaleY: 1, transformOrigin: "100% 0%", repeat: -1, yoyo: true }, 0)

	//	.fromTo(angel_fullBody, 2, { y: -10 }, { y: +10, repeat: -1, yoyo: true }, 0)

		.set(tanker_ball, { alpha: 0, x: +120 }, 0)
		.to(tanker_leftWheel, 1, tween_options_to, 0)
		.to(tanker_rightWheel, 2, tween_options_to, 0)
		.to(tanker, 2, { x: 100 }, 0)
		.to(tanker_cap, 5, { rotation: 90, transformOrigin: 'right 50% 50%' }, 0)

		.to(tanker_top, 1, { ease: Elastic.easeOut.config(2.5, 0.2), x: +1 }, 2)
		.to(tanker_ball, 0.2, { alpha: 1 }, 2.1);




});



function LunchAnimation() {
}













