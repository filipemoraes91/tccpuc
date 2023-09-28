import React, { useState, useEffect } from 'react';

export function useAuth() {

    const logar = (user) => {
        if (user.usuario === 'filipe' && user.senha === '123') {
            window.location.href = '/home'
        } else {
            alert('login invalido');
        }
    };
    
    return [logar];
}