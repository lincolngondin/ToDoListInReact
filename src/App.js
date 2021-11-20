import './App.css';
import {useState} from 'react';


const List = (props) => {
	return (
		props.list.map(
			(v, index)=>{
				return (
					<div className="itemDiv">
						<li className='item'>{v}</li>
						<button className="itemDeleteButton" onClick={ (e)=>{props.remover(index)} }>x</button>
					</div>
					);
			} 
		)
	);
}

const InputItem = (props) => {
	return (
		<form>
			<div className="itemDiv">
				<li className='item'>
					<input onChange={(e)=>{props.handleInputChange(e.target.value)}} value={props.text} className="itemInput"></input>
				</li>
				<button className="itemAddButton" onClick={(e)=>{e.preventDefault();props.add(props.text);}}>+</button>
			</div>
		</form>
	);
}

function App() {
	const [text, setText] = useState('');
	const [items, setItems] = useState(['kjk','kjl']);
	
	function handleInputChange(txt){
		setText(txt);
	}
	
	function addItem(item){
		if(item !== ''){
			setItems([...items, item]);
			setText('');
		}
	}
	
	function removeItems(indice){
		const temp = items.slice(0, indice).concat(items.slice(indice+1));
		setItems(temp);
	}
	
	return (
		<div className="App">
			<h1 className="title">To Do List </h1>
			<ol>
				<List list={items} remover={removeItems}/>
				<InputItem handleInputChange={handleInputChange} add={addItem} text={text}/>
			</ol>
		</div>
	);
}

export default App;
