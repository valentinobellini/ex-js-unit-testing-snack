function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ');
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}


function createSlug(stringa) {
    if (!stringa) {
        throw new Error('Titolo non valido');
    }
    return stringa.toLowerCase().replaceAll(' ', '-');

}



function average(numbers) {
    numbers.forEach(n => {
        if (isNaN(n)) {
            throw new Error("Deve essere un numero!");

        }
    })
    const sum = numbers.reduce((acc, n) => {
        return acc + n
    }, 0)

    return sum / numbers.length
}


function isPalindrome(string) {
    const reversed = string.split('').reverse().join('')
    return string === reversed
}








function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non è un id`);

    }
    posts.forEach(p => {
        if (p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("L'array posts non è nel formato corretto");

        }
    })
    return posts.find(p => p.id === id)

}






module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}