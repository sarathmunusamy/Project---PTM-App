$(document).ready(function () {

	LunchAnimation();

});


function LunchAnimation() {



	var SpinnerAnimation = new TimelineMax({ repeat: -1 });

	SpinnerAnimation
		.set("#firstFile", { x: +115, y: -120 }, 0)
		.set("#secondFile", { x: +115, y: -123 }, 0)
		.set("#thirdFile", { x: +115, y: -126 }, 0)
		.set("#duplicateImage", { y: -25, x: 0, alpha: 0 }, 0)

		.set("#computer", { x: +130 }, 0)


		.from("#logoLeftBlue", 0.5, { x: +20 }, 0.2)
		.from("#logoRightBlue", 0.5, { x: +20 }, 0.2)
		.from("#logoBackground", 0.5, { x: +20 }, 0.2)


		.to("#logoLeftBlue", 0.5, { rotationY: 120, transformOrigin: "left top" }, 0.8)
		.to("#logoRightBlue", 0.5, { rotationY: 120, transformOrigin: "right top" }, 0.8)

		.to("#firstFile", 0.5, { x: +29 }, 1.0)
		.to("#secondFile", 0.5, { x: +29, y: -123 }, 1.7)

		.to("#thirdFile", 0.5, { x: +29, y: -126 }, 2.4)

		.to("#logoLeftBlue", 0.5, { rotationY: 0, transformOrigin: "left top" }, 2.9)
		.to("#logoRightBlue", 0.5, { rotationY: 0, transformOrigin: "right top" }, 2.9)

		.set("#firstFile", { alpha: 0 }, 3.2)
		.set("#secondFile", { alpha: 0 }, 3.2)
		.set("#thirdFile", { alpha: 0 }, 3.2)
		.set("#duplicateImage", { alpha: 1 }, 3.2)
		.set("#logoLeftBlue", { alpha: 0 }, 3.2)
		.set("#logoRightBlue", { alpha: 0 }, 3.2)
		.set("#logoBackground", { alpha: 0 }, 3.2)

		.to("#duplicateImage", 0.5, { scale: 0, transformOrigin: "50% 50%" }, 3.2);

}
































