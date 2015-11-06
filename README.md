# FeedReaderTests
Feed Reader - P6

Steps to run index.html

##App Functionality

This application will be running some tests using jasmine JS. 

go to
http://craraulsalazar.github.io/FeedReaderTests/index.html


##Test #1 (name suite "RSS Feeds") with 3 expectations

  1. Test that all feed array variable has been defined and that it is not empty

  2. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

  3. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

##Test #2 (suite name "The menu") with 2 expectations 
 
  1. Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

  2. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

##Test #3 (suite name "Initial Entries") with 1 expectation

  1. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

##Test #4 (suite name "New Feed Selection") with 1 expectation

  1. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.