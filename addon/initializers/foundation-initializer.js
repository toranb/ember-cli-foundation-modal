const DEFAULT_ELEMENT = "div.ember-view";

export default function initialize(container, application) {
  var modalRoot = application.foundationModalElement || DEFAULT_ELEMENT;

  // this should be the root element of the ember app
  $(document).foundation({
    reveal: {
      root_element: modalRoot
    }
  });
}
