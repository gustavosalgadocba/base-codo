const peliculas = document.querySelectorAll('.peli-cont');
        const trailerContainer = document.getElementById('trailer-container');
        const iframe = trailerContainer.querySelector('iframe');
        const closeTrailerButton = document.getElementById('close-trailer');

        peliculas.forEach(pelicula => {
            pelicula.addEventListener('click', () => {
                const trailerUrl = pelicula.getAttribute('data-trailer');
                iframe.src = trailerUrl;
                trailerContainer.style.display = 'block';
            });
        });

        closeTrailerButton.addEventListener('click', () => {
            trailerContainer.style.display = 'none';
            iframe.src = '';
        });