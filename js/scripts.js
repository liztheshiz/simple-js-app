// Initialize list of Pokemon
let pokemonList = [
	{name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
	{name: 'Mankey', height: 0.5, types: ['fighting']},
	{name: 'Piloswine', height: 1.1, types: ['ice', 'ground']}
];

// Write list of Pokemon in pokemonList on screen
for (let i = 0; i < 3; i++) {
	document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}); `);
}