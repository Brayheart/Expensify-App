/* global $ */

$(document).ready(function() {

// Event handler for login form submission
$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    // Prepare the requestJobDescription data
    var jobDescription = {
        "type": "create",
        "credentials": {
            "partnerUserID": username,
            "partnerUserSecret": password
        },
        // ... other parameters as required by Expensify's API ...
    };

    // AJAX request for authentication
    $.ajax({
        url: 'https://integrations.expensify.com/Integration-Server/ExpensifyIntegrations',
        method: 'POST',
        data: {
            'requestJobDescription': JSON.stringify(jobDescription)
        },
        success: function(response) {
            // Handle successful authentication
            // Extract the authToken from the response if necessary
            // Store the authToken securely, e.g., in sessionStorage
        },
        error: function(xhr, status, error) {
            // Handle errors (e.g., display error message)
        }
    });
});


// Event handler for create transaction form submission
$('#createTransactionForm').on('submit', function(e) {
    e.preventDefault();
    var date = $('#transactionDate').val();
    var merchant = $('#merchantName').val();
    var amount = $('#transactionAmount').val();

    // Prepare the transaction data according to Expensify's API requirements
    var transactionData = {
        "type": "transaction",
        // ... include the authentication token if required ...
        // ... and the rest of the required data ...
    };

    // AJAX request to create a transaction
    $.ajax({
        url: 'https://integrations.expensify.com/Integration-Server/ExpensifyIntegrations',
        method: 'POST',
        data: {
            'requestJobDescription': JSON.stringify(transactionData)
        },
        success: function(response) {
            // Handle the successful transaction creation
            // Update the UI with the new transaction
        },
        error: function(xhr, status, error) {
            // Handle errors
        }
    });
});


    // Additional JavaScript to interact with the Expensify API...
});
