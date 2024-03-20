-- update_movies_name.sql

-- Update the movie title, genre, and release year for "Female Trouble"
UPDATE movies
SET movie_title = 'Dragon Crusaders',
    movie_genre = 'Adventure',
    year_released = '2011-12-21'
WHERE movie_title = 'Female Trouble';