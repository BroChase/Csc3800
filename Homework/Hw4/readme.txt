newmovies Database currenlty has 5 movies.
To add more for testing simply change the title of a move post in postman to a unique title or it will not save due to unique required.
title:, year:, and actor: are all required in the movies schema but only title is a unique element.
Year is the only value of a movie that is allowed to be updated is required and must be a number.
paths
/GET
/GETONE/title
/POST
/DEL/title
/UPDATE/title