import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from './component/Card';
import { Input } from './component/Input';
import { Button } from './component/Button';
function App() {

    const [myLists, setMyList] = useState([
        {
            userId: 1,
            id: 201,
            title: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
            completed: false
        },
        {
            userId: 1,
            id: 202,
            title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. ',
            completed: false
        },
        {
            userId: 1,
            id: 203,
            title: 'Есть много вариантов Lorem Ipsum,',
            completed: false
        },
    ])

    const [title, setTitle] = useState('')

    const [list, setList] = useState([])
    const [number, setNumber] = useState(204)
    function addNewCard(e) {
        e.preventDefault()
        const newCard = {
            userId: 1,
            id: number,
            title: title,
            completed: false
        }
        setMyList([...myLists, newCard])
        setNumber(number + 1)
        setTitle('')

    }




    useEffect(() => {
        const show = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                setList(response.data)
            } catch (error) {
                console.error('Something wrong', error);
            }
        }
        show()
    }, [])

    function handleDeleteCard(id) {
        const updatedMyLists = myLists.filter(myList => myList.id !== id);
        setMyList(updatedMyLists);
    }

    return (
        <div className="App">
            <form>
                <Input value={title} setValue={setTitle} />
                <div className='Buttons'>
                    <Button onClick={addNewCard}>Add</Button>
                </div>
            </form>
            <div className='Show'>
                {myLists.map(myList => (

                    <Card key={myList.id}>{myList.title}
                        <Button onClick={() => handleDeleteCard(myList.id)}>Delete</Button>
                    </Card>

                ))}
                {list.map(item => <Card key={item.id}>{item.title}</Card>)}
            </div>
        </div>
    );
}

export default App;