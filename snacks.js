function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ');
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}


function createSlug(stringa) {
    return stringa.toLowerCase();
}


module.exports = {
    getInitials,
    createSlug
}