const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    const types = ['hero', 'villain'];
    let typeIndex = 0;

    for (let i = 0; i < players.length; i++) {
        const player = {
            name: players[i],
            strength: Math.floor(Math.random() * 100) + 1, // Default strength as any number
            imageUrl: "images/super-" + (i + 1) + ".png",
            type: types[typeIndex]
        };
        detailedPlayers.push(player);

        // Alternate between hero and villain types
        typeIndex = (typeIndex + 1) % types.length;
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    const filteredPlayers = players.filter(player => player.type === type);

    for (const player of filteredPlayers) {
        fragment += `
            <div class="player">
                <img src="${player.imageUrl}" alt="${player.name}">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `;
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
