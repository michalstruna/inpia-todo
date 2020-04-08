import React, { FormEvent } from 'react'
import Styled from 'styled-components'

import { TodoData } from '../types'
import Todo from './Todo'
import { Color, hoverShadow } from '../../Style'
import { LocalStorage } from '../../Utils'

interface Static {

}

interface Props extends React.ComponentPropsWithoutRef<'div'> {

}

const Root = Styled.div`
    margin: 0.5rem auto;
    width: 50rem;
    max-width: 100%;
`

const AddForm = Styled.form`
    display: flex;
    margin: 1rem auto;
`

const Input = Styled.input`
    width: 100%;
`

const AddButton = Styled.button`
    ${hoverShadow(Color.GREEN)};
    margin-left: 1rem;
    width: 7rem;
`

const List = Styled.div`

`

const Title = Styled.h2`
    font-size: 130%;
`

const TodoList: React.FC<Props> & Static = ({ ...props }) => {

    const [newTodo, setNewTodo] = React.useState('')
    const [todos, setTodos] = React.useState<TodoData[]>(JSON.parse(localStorage.getItem(LocalStorage.TODOS) || '[]'))

    React.useEffect(() => {
        localStorage.setItem(LocalStorage.TODOS, JSON.stringify(todos))
    }, [todos])

    // TODO: Create component AddTodoForm?
    const handleAdd = (event: FormEvent) => {
        event.preventDefault()

        if (newTodo) {
            setTodos([...todos, { id: new Date().getTime().toString(), text: newTodo }])
            setNewTodo('')
        }
    }

    const renderedTodos = React.useMemo(() => {
        const handleRemove = (todoId: string) => {
            setTodos(todos.filter(todo => todo.id !== todoId))
        }

        return todos.map((todo: TodoData, i: number) => (
            <Todo {...todo} onRemove={handleRemove} key={i} />
        ))
    }, [todos])

    return (
        <Root {...props}>
            <AddForm onSubmit={handleAdd}>
                <Input
                    type='text'
                    placeholder='Enter new todo'
                    value={newTodo}
                    onChange={event => setNewTodo(event.target.value)} />
                <AddButton disabled={!newTodo}>
                    Add
                </AddButton>
            </AddForm>
            {todos.length ? (
                <>
                    <Title>
                        Todo list ({todos.length})
                    </Title>
                    <List>
                        {renderedTodos}
                    </List>
                </>
            ) : (
                <Title>
                    All todos are done!
                </Title>
            )}
        </Root>
    )

}

export default TodoList