const { getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
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




// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug sostituisce gli spazi con -."

// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Andrea Mardari')).toBe('andrea-mardari')
})






// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('anna')).toBeTruthy();
    expect(isPalindrome('carlo')).toBeFalsy();

})




// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');

})





// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

// Creare un test che verifichi le seguenti descrizioni:

// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

const posts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        slug: "introduzione-a-javascript"
    },
    {
        id: 2,
        title: "Come funziona il DOM",
        slug: "come-funziona-il-dom"
    },
    {
        id: 3,
        title: "Guida pratica a React",
        slug: "guida-pratica-a-react"
    }
];

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: "Come funziona il DOM",
        slug: "come-funziona-il-dom"
    })
    expect(() => findPostById(posts, 'casa')).toThrow('casa non è un id')
    expect(() => findPostById([1, 2], 2)).toThrow('L\'array posts non è nel formato corretto')
})