// define(["jquery", "jquery.alpha", "jquery.beta"], function($) {
//     //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
//     $(function() {
//         $('body').alpha().beta();
//     });
// });

define(
    "friends.data",
    [ /** no dependencies. **/ ],
    [
        {
            "id": 1,
            "name": "Sarah",
            "age": 35
        },
        {
            "id": 2,
            "name": "Tricia",
            "age": 38
        },
        {
            "id": 3,
            "name": "Joanna",
            "age": 29
        },
        {
            "id": 4,
            "name": "Libby",
            "age": 37
        }
    ]
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// Now, let's require the data AND the template in order to
// render the page properly.
require(
    [
        "jquery",
        "friends.data"
    ],
    function( $,friendsData){
        // Now that we've loaded the template and data, let's
        // make sure we're waiting for the DOM-ready event.
        // Since we loaded the jQuery/RequireJS library, we
        // can use jQuery to get the DOM-ready.
        var friendHtml = `<li class="friend"><span class="name">NAME</span><span class="age">( Age: <span class="value">AGE</span> )</span></li>`;
        $(function(){
            // Get the friends list.
            var friendsList = $( "ul.friends" );
            // Get the template node (which we will use to
            // create the friends.
            var template = $( friendHtml );
            // Map the array of friends' data into an array
            // of template nodes to be added to the DOM.
            var buffer = $.map(
                friendsData,
                function( friendData, index ){
                    // Close the template.
                    var friend = template.clone();
                    // Set the name.
                    friend.find( "span.name" ).text(
                        friendData.name
                    );
                    // Set the age.
                    friend.find( "span.age span.value" ).text(
                        friendData.age
                    );
                    // Return the raw node.
                    return( friend.get() );
                }
            );
            // Insert the friend template DOM node buffer
            // into the page.
            friendsList.append( buffer );
        });
    }
);