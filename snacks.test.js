const { getInitials,
    createSlug,
    average
} = require('./snacks.js')


// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Mario Rossi')).toBe('M.R.');
    expect(getInitials('Giuseppe Franchi')).toBe('G.F.');
    expect(getInitials('Aldo Besu')).toBe('A.B.');

});



// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug restituisce una stringa in lowercase."



test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('CIAO')).toBe('ciao');
    expect(createSlug('Ciao')).toBe('ciao');

})


// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([10, 20])).toBe(15);
    expect(average([10, 20, 30, 40, 50])).toBe(30);
    expect(() => average([10, 20, 'ciao', 40, 50])).toThrow();
})