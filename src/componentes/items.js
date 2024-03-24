import React from "react";
import validarVitoria from "../funcoes/validarVitoria";

function Items(props){
    let novoJogo = [...props.jogo]
    const row = parseInt(props.row)
    const column = parseInt(props.column)

    const clicar = () => {
        if(props.vencedor === ''){
            if (novoJogo[row][column] === ''){
                novoJogo[row][column] = props.vez
            }
            
            if (props.vez === 'X'){
                props.setVez('O')
            } else {
                props.setVez('X')
            }
            
            props.setJogo(novoJogo)

            let camp = validarVitoria(props.jogo)

            if(camp === 'X'){
                props.setVencedor('X')
            } else if (camp === 'O') {
                props.setVencedor('O')
            } else if (camp === 'empate') {
                props.setVencedor('empate')
            }
        } else {
            return
        }
    }

    return (
        <>
        <div className="item" onClick={clicar}>
            {novoJogo[row][column]}
        </div>
        </>
    )
}

export default Items