export function getInfUser(){
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