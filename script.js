/* global $ */

$(document).ready(function() {

// Event handler for login form submission
$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    // Prepare the data for the authentication request
    var authData = {
        command: "Authenticate",
        partnerName: "applicant",
        partnerPassword: "d7c3119c6cdab02d68d9",
        partnerUserID: username,
        partnerUserSecret: password
    };

    // AJAX request for authentication
    $.ajax({
        url: 'https://www.expensify.com/api',
        method: 'POST',
        data: authData,
        success: function(response) {
            // Handle successful authentication
            var authToken = response.authToken;
            // Store the authToken securely, e.g., in sessionStorage
            sessionStorage.setItem('authToken', authToken);
        },
        error: function(xhr, status, error) {
            // Handle errors (e.g., display error message)
            console.error("Authentication failed:", xhr.responseText);
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


// Example function to call when you need to create a transaction
function createTransaction(authToken, transactionDetails) {
    var createData = {
        command: "CreateTransaction",
        authToken: authToken,
        // ... include other transaction details here ...
    };

    // AJAX request to create a transaction
    $.ajax({
        url: 'https://www.expensify.com/api',
        method: 'POST',
        data: createData,
        success: function(response) {
            // Handle the successful transaction creation
            console.log("Transaction created:", response);
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error("Transaction creation failed:", xhr.responseText);
        }
    });
}

    // Additional JavaScript to interact with the Expensify API...
});
