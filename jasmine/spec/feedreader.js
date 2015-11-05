/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);

    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('Url is defined and Url is not empty', function() {

      for (var feed in allFeeds) {
        expect(allFeeds[feed].url).toBeDefined();
        expect(allFeeds[feed].url.length).not.toBe(0);
      }

    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('Name is defined and Name is not empty', function() {

      for (var feed in allFeeds) {
        expect(allFeeds[feed].name).toBeDefined();
        expect(allFeeds[feed].name.length).not.toBe(0);
      }

    });

  });



  /* TODO: Write a new test suite named "The menu" */

  /* TODO: Write a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */

  /* TODO: Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */


  describe('The menu', function() {

    var body = document.body;


    it('should hide menu element by default', function() {
      expect(body.className).toBe('menu-hidden');
    });


    it('should show menu changes visibly when the menu icon is clicked', function() {

      //on first click, menu appears and the "menu-hidden" class is removed from the body element.
      $('a.menu-icon-link').trigger('click');
      expect(body.className).not.toBe('menu-hidden');

      //on second click, menu dissappears and the "menu-hidden" class is added back onto the body element.
      $('a.menu-icon-link').trigger('click');
      expect(body.className).toBe('menu-hidden');
    });


  });


  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test wil require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */


  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('loadFeed function completed and there is at least one entry', function(done) {

      expect($('.feed').length).not.toBe(0);
      done();
    });

  });


  /* TODO: Write a new test suite named "New Feed Selection"

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */


  describe('New Feed Selection', function() {

    var oldContent, newContent;

    beforeEach(function(done) {
      loadFeed(0, function() {
        oldContent = $('.header-title').html();
        loadFeed(1, function() {
          newContent = $('.header-title').html();
          done();
        });
      });
    });

    it('a new feed is loaded by the loadFeed function and the content actually changes', function(done) {

      //console.log(oldContent);
      //console.log(newContent);
      expect(newContent).not.toBe(oldContent);
      done();

    });

  });



}());