Homework3
-Give one reason(there are many) OAuth tokens should not be granted in the main flow, assuming the user has sent in the correct credentials.

One of the big reasons that the oauth token should not be used in the main flow is it keeps the tokens safe from scripts and other harmful
"man in the middle" type of attacks where the "attacker" may try to get your token to access the data.  The point of the Oauth is to 
protect the users data and prevent unwanted access.  