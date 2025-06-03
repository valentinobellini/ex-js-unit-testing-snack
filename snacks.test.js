const { getInitials } = require('./snacks.js')


// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."




test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Mario Rossi')).toBe('M.R.');
    expect(getInitials('Giuseppe Franchi')).toBe('G.F.');
    expect(getInitials('Aldo Besu')).toBe('A.B.');

});