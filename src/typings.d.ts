// Ionic Page Events
// In addition to the Angular life cycle events, Ionic Angular provides a few additional events that you can use:
// see - https://ionicframework.com/docs/angular/lifecycle#ionic-page-events

interface willEnter {
  /**
   * Fired when the component routing to is about to animate into view.
   *
   * @public
  */
  ionViewWillEnter(): void;
}

interface didEnter {
  /**
   * Fired when the component routing to has finished animating.
   *
   * @public
  */
  ionViewDidEnter(): void;
}

interface willLeave {
  /**
   * Fired when the component routing from is about to animate.
   *
   * @public
  */
  ionViewWillLeave(): void;
}

interface didLeave {
  /**
   * Fired when the component routing to has finished animating.
   *
   * @public
  */
  ionViewDidLeave(): void;
}
