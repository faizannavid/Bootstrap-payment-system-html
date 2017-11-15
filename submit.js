// magic.js
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {
	//alert('hello');
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
    	
    	// getinfo (amount, orderid, storeid, urls, email,) from backend ajax call.
 /*       $.get( 
                "data.php",
                { name: arr },
                function(data) {
                   $('#stage').html(data);
                }
             );*/
    	  $.ajax({
    		  type: "GET",
    		  url: "data.php",
    		  datatype: "html",
    		  data: dataString,
    		/*  success: function(data) {
    		    alert(data);
    		    } */
    		});
    	
        var formData = {
            'total_amount'      : $('input[name=total_amount]').val(),
            'store_id'          : $('input[name=store_id]').val(),
            'tran_id'           : $('input[name=tran_id]').val(),
            'success_url'       : $('input[name=success_url]').val(),
            'fail_url'          : $('input[name=fail_url]').val(),
            'cancel_url'        : $('input[name=cancel_url]').val()
            
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
