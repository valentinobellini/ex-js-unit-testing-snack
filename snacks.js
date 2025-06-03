function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ');
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}


function createSlug(stringa) {
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








module.exports = {
    getInitials,
    createSlug,
    average
}