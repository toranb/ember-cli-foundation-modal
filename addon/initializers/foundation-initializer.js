var DEFAULT_ELEMENT = "div.ember-view";
var DEFAULT_ANIMATION_SPEED = 250;

export default function initialize(container, application) {
  // this should be the root element of the ember app
  var modalRoot = application.foundationModalElement || DEFAULT_ELEMENT;

  var animationSpeed = DEFAULT_ANIMATION_SPEED;

  if (!isNaN(application.foundationModalAnimationSpeed) && application.foundationModalAnimationSpeed >= 0) {
    animationSpeed = application.foundationModalAnimationSpeed;
  }

  $(document).foundation({
    reveal: {
      root_element: modalRoot,
      animation_speed: animationSpeed
    }
  });
}
