export default function validarVitoria(jogo) {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (jogo[i][0] !== '' && jogo[i][0] === jogo[i][1] && jogo[i][1] === jogo[i][2]) {
            return jogo[i][0]; // Retorna o jogador que venceu
        }
    }

    // Verificar colunas
    for (let j = 0; j < 3; j++) {
        if (jogo[0][j] !== '' && jogo[0][j] === jogo[1][j] && jogo[1][j] === jogo[2][j]) {
            return jogo[0][j]; // Retorna o jogador que venceu
        }
    }

    // Verificar diagonal principal
    if (jogo[0][0] !== '' && jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2]) {
        return jogo[0][0]; // Retorna o jogador que venceu
    }

    // Verificar diagonal secundária
    if (jogo[0][2] !== '' && jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0]) {
        return jogo[0][2]; // Retorna o jogador que venceu
    }

    let n = 0
    for(let i = 0; i < 3; i++) {
        for(let c = 0; c < 3; c++) {
            if(jogo[i][c] === ''){
                n += 1
            }
        }
    }

    if(n === 0) {
        return 'empate'
    }
    // Se não houver vencedor
    return null;
}
