const movies = [
    {
        "id": 1,
        "title": "Five Nights at Freddy's",
        "genre": "Horror",
        "description": "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.",
        "year": 2023,
        "director": "Scott Cawthon",
        "poster": "https://m.media-amazon.com/images/M/MV5BMzFiMjFjMWEtMWQ5Zi00YjYwLTg0YTgtNDk4YWE3YzllNzg1XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        "score": 10,
        "link": "https://www.youtube.com/watch?v=p7Ya34-ZY_M"
    },
    {
        "id": 2,
        "title": "Street Fighter",
        "genre": "Action",
        "description": "In the midst of a civil war in South East Asia, a general intensifies the climate of violence by kidnapping 63 UN delegates. To free the hostages, a colonel leads a group of fighters, who will have to use all their skills to be successful.",
        "year": 1994,
        "director": "Steven E. de Souza",
        "poster": "https://upload.wikimedia.org/wikipedia/en/9/97/StreetFighterMoviePoster.jpg",
        "score": 9.3,
        "link": "https://www.youtube.com/watch?v=6b3xNeoMYBU"
    },
    {
        "id": 3,
        "title": "The Godfather",
        "genre": "Crime",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        "score": 9.2,
        "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        "id": 4,
        "title": "The Dark Knight",
        "genre": "Action",
        "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "year": 2008,
        "director": "Christopher Nolan",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "score": 9.0,
        "link": "https://www.youtube.com/watch?v=VKMw2it8dQY"
    },
    {
        "id": 5,
        "title": "Pulp Fiction",
        "genre": "Crime",
        "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "year": 1994,
        "director": "Quentin Tarantino",
        "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "score": 8.9,
        "link": "https://www.youtube.com/watch?v=dFrgIrWmTeY"
    },
    {
        "id": 6,
        "title": "Forrest Gump",
        "genre": "Drama",
        "description": "The presidencies of Kennedy and Johnson, the events of Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        "year": 1994,
        "director": "Robert Zemeckis",
        "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        "score": 8.8,
        "link": "https://www.youtube.com/watch?v=187trX0mo1o"
    },
    {
        "id": 7,
        "title": "The Matrix",
        "genre": "Sci-Fi",
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "year": 1999,
        "director": "Lana Wachowski",
        "poster": "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF894,1000_QL80_.jpg",
        "score": 8.7,
        "link": "https://www.youtube.com/watch?v=ODmhPsgqGgQ"
    },
    {
        "id": 8,
        "title": "Mortal Kombat",
        "genre": "Action",
        "description": "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
        "year": 2021,
        "director": "Simon McQuoid",
        "poster": "https://m.media-amazon.com/images/M/MV5BYjZmMjdlNDEtOGE0NC00MmQyLWIyNTgtMzc1NWRjYTYzMWZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        "score": 8.8,
        "link": "https://www.youtube.com/watch?v=6M9TzhlpMLg"
    },
    {
        "id": 9,
        "title": "Fight Club",
        "genre": "Drama",
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "year": 1999,
        "director": "David Fincher",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        "score": 8.8,
        "link": "https://www.youtube.com/watch?v=chyRpj-971o"
    },
    {
        "id": 10,
        "title": "Interstellar",
        "genre": "Sci-Fi",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "year": 2014,
        "director": "Christopher Nolan",
        "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "score": 8.6,
        "link": "https://www.youtube.com/watch?v=onVhbeY7nLM"
    },
    {
        "id": 11,
        "title": "Gladiator",
        "genre": "Action",
        "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "year": 2000,
        "director": "Ridley Scott",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=lKn-Agk-yAI"
    },
    {
        "id": 12,
        "title": "The Departed",
        "genre": "Crime",
        "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
        "year": 2006,
        "director": "Martin Scorsese",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=AwmCbh5yjbM"
    },
    {
        "id": 13,
        "title": "The Lion King",
        "genre": "Animation",
        "description": "Lion cub and future king Simba flees his kingdom after the death of his father. He returns as an adult to reclaim his throne.",
        "year": 1994,
        "director": "Roger Allers",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=1kGEz1zDGgY"
    },
    {
        "id": 14,
        "title": "Se7en",
        "genre": "Thriller",
        "description": "Two detectives hunt a serial killer who uses the seven deadly sins as his modus operandi.",
        "year": 1995,
        "director": "David Fincher",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "score": 8.6,
        "link": "https://www.youtube.com/watch?v=6s70OF1sv-I"
    },
    {
        "id": 15,
        "title": "Back to the Future",
        "genre": "Adventure",
        "description": "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, a scientist.",
        "year": 1985,
        "director": "Robert Zemeckis",
        "poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=T_WSXXPQYeY"
    },
    {
        "id": 16,
        "title": "The Prestige",
        "genre": "Drama",
        "description": "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.",
        "year": 2006,
        "director": "Christopher Nolan",
        "poster": "https://m.media-amazon.com/images/I/619c+UQZaOL._AC_UF894,1000_QL80_.jpg",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=phusjuBT8mw"
    },
    {
        "id": 17,
        "title": "Whiplash",
        "genre": "Drama",
        "description": "A young and ambitious jazz drummer enters into an intense relationship with an abusive music instructor.",
        "year": 2014,
        "director": "Damien Chazelle",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
        "score": 8.5,
        "link": "https://www.youtube.com/watch?v=GBvBu5ErSSo"
    },
    {
        "id": 18,
        "title": "Parasite",
        "genre": "Thriller",
        "description": "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        "year": 2019,
        "director": "Bong Joon-ho",
        "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        "score": 8.6,
        "link": "https://www.youtube.com/watch?v=5xH0HfJHsaY"
    },
    {
        "id": 19,
        "title": "The Grand Budapest Hotel",
        "genre": "Comedy",
        "description": "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        "year": 2014,
        "director": "Wes Anderson",
        "poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
        "score": 8.1,
        "link": "https://www.youtube.com/watch?v=JN5sqSEXxm4"
    },
    {
        "id": 20,
        "title": "La La Land",
        "genre": "Musical",
        "description": "A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship as they pursue their dreams.",
        "year": 2016,
        "director": "Damien Chazelle",
        "poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        "score": 8.0,
        "link": "https://www.youtube.com/watch?v=7CVfTd-_qbc"
    }
]

export default movies;