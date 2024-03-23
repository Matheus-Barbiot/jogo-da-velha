import React, {useState} from "react";
import validarVitoria from "../funcoes/validarVitoria";

function Items(props){
    let novoJogo = [...props.jogo]
    const row = parseInt(props.row)
    const column = parseInt(props.column)
    
    const value = novoJogo[row][column]

    const clicar = () => {
        if (novoJogo[row][column] == ''){
            novoJogo[row][column] = props.vez
        }
        
        if (props.vez === 'X'){
            props.setVez('O')
        } else {
            props.setVez('X')
        }
        
        if(validarVitoria(novoJogo) == 'X'){
            console.log('X venceu')
        } else if (validarVitoria(novoJogo) == 'O') {
            console.log('O venceu')
        }
        props.setJogo(novoJogo)
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