export function getInfUser() {
    try {
        return JSON.parse(sessionStorage.getItem('usuario'))
    } catch (error) {
        return undefined;
    }
}

export function Logoff() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
}

export function formatDateSQL(data) {
    function _formatZero(valor) {
        if (valor < 10)
            return valor = '0' + valor;
        else
            return valor;
    }

    const date = new Date(data);
    return date.getFullYear() + '-' + _formatZero(parseInt(date.getMonth()) + 1) + '-' + _formatZero(date.getDate());
}

export function formatDate(data) {
    function _formatZero(valor) {
        if (valor < 10)
            return valor = '0' + valor;
        else
            return valor;
    }

    const date = new Date(data);
    return _formatZero(date.getDate()) + '/' + _formatZero(parseInt(date.getMonth()) + 1) + '/' +  date.getFullYear() ;
}