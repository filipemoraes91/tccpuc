export function getInfUser(){
    return JSON.parse(sessionStorage.getItem('usuario'))
}

export function Logoff() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
}