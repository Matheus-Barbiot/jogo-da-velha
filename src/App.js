import React, {useState} from 'react';
import Items from './componentes/items';
import './App.css';

function App() {
	const [jogo, setJogo] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	])
	
	const [vez, setVez] = useState('X')
	console.log(jogo)
	
	return (
		<>
		<div>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='0' row='0'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='1' row='0'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='2' row='0'/>
			<br/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='0' row='1'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='1' row='1'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='2' row='1'/>
			<br/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='0' row='2'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='1' row='2'/>
			<Items jogo={jogo} setJogo={setJogo} vez={vez} setVez={setVez} column='2' row='2'/>
		</div>
		<div>
			<p>Vez de {vez}</p>
		</div>
		</>
	);
}

export default App;
