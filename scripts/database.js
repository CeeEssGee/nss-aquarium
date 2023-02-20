const database = {
    fish: [
        {
            name: "Angela",
            species: "Angel Fish",
            food: "crustaceans",
            size: 5,
            location: "Sydney, Australia",
            image: "link" //can we add an image to an object?
        },
        {
            name: "Bart",
            species: "Barramundi",
            food: "insects, crustaceans, other fish",
            size: 12,
            location: "Tinaroo Falls Dam, Australia",
            image: "link" //can we add an image to an object?
        },
        {
            name: "Carl",
            species: "Cuttlefish",
            food: "crustaceans",
            size: 3,
            location: "Bahamas",
            image: "link" //can we add an image to an object?
        },
        {
            name: "Davy",
            species: "Dover Sole",
            food: "worms",
            size: 9,
            location: "Mississippi",
            image: "link" //can we add an image to an object?
        },
        {
            name: "Ellie",
            species: "Eel",
            food: "fish, plankton",
            size: 18,
            location: "Mexico",
            image: "link" //can we add an image to an object?
        },
        {
            name: "George",
            species: "Gooseneck",
            food: "plants",
            size: 7,
            location: "Lake Michigan",
            image: "link" //can we add an image to an object?
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}