import React, {useState} from 'react';
import Items from './componentes/items';
import './App.css';

function App() {
	const [jogo, setJogo] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	])

	const [vencedor, setVencedor] = useState('')
	const [vez, setVez] = useState('X')

	const texto = () => {
		if(vencedor === ''){
			return <p className='text' id='vez'>Vez de <strong>{vez}</strong></p>
		} else if (vencedor === 'empate'){
			return <p className='text' id='empate'>EMPATE!!!</p>
		}else{
			return <p className ='text'id='vencedor'><strong>{vencedor}</strong> venceu!</p>
		}
	}

	const recarregar = () => {
		setJogo([
			['', '', ''],
			['', '', ''],
			['', '', ''],
		])
		setVez('X')
		setVencedor('')
	}
	const mostrarRestart = () => {
		if(vencedor != ''){
			return <div id='restart' onClick={recarregar}>↻</div>
		} else {
			return
		}
	}
	return (
		<>
		<div id='jogo'>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='0' row='0'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='1' row='0'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='2' row='0'/>

			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='0' row='1'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='1' row='1'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='2' row='1'/>

			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='0' row='2'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='1' row='2'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} vencedor={vencedor} setVencedor={setVencedor} column='2' row='2'/>
		</div>
		<div>
			{texto()}
		</div>
		{mostrarRestart()}
		</>
	);
}

export default App;
