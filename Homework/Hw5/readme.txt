newmovies Database currenlty has 5 movies.
moviereviews Database currently at least 1 review for each movie in the newmovies db
To add more for testing simply change the title of a move post in postman to a unique title or it will not save due to unique required.
title:, year:, and actor: are all required in the movies schema but only title is a unique element.
Year is the only value of a movie that is allowed to be updated is required and must be a number.
paths
/GET
/GETONE/title
/POST
/DEL/title
/UPDATE/title

/POSTREVIEW  --post a review to the database. uses the title as a key to check if the title exists in the newmovies db
	if the movie does not exist the post is rejected.  Else the review is saved.
/GETONE/title has been updated to accept a query reviews=True.  If the ?reviews=True is passed in the movie and the movies reviews are returned.
	else if reviews does not = True then just the movie is returned to the user.