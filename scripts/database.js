const database = {
    fish: [
        {
            name: "Angela",
            species: "Angel Fish",
            food: "crustaceans",
            size: 5,
            location: "Sydney, Australia",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj8qS0fkWH9s4cTjNmNexK1GQpiQbfOWgdwNTB0y1TMgWqbZZ0NEB-xrC3BZNmodW1wU&usqp=CAU"
        },
        {
            name: "Bart",
            species: "Barramundi",
            food: "insects, crustaceans, other fish",
            size: 12,
            location: "Tinaroo Falls Dam, Australia",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqz1ja9w6D4w3UUoVEUzNLQfW6eXySb0C_g&usqp=CAU"
        },
        {
            name: "Carl",
            species: "Cuttlefish",
            food: "crustaceans",
            size: 3,
            location: "Bahamas",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZtahRDaajmoeBegqjW__uLf9ui288t0FmQ&usqp=CAU"
        },
        {
            name: "Davy",
            species: "Dover Sole",
            food: "worms",
            size: 9,
            location: "Mississippi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6uXaIEstKCpebJrIE-sQ8aoLEDBKMtjiTg&usqp=CAU"
        },
        {
            name: "Ellie",
            species: "Eel",
            food: "fish, plankton",
            size: 18,
            location: "Mexico",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwPovQYRgBOx3Dn8NKCFJYVhvETQyci6mQv2Fx54zgV1KpjeKerMj2DYJw7DPxRpv56o&usqp=CAU"
        },
        {
            name: "George",
            species: "Grouper",
            food: "plants",
            size: 7,
            location: "Lake Michigan",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGESul19g_p-A-fbX34A2AsI4SCUabsAScw&usqp=CAU"
        }
    ]
}

// code provided - copies the objects in an array
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}