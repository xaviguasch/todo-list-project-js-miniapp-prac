let result = ''
let todos = []

while (result !== 'quit') {
  result = prompt('What would you like to do?')

  if (result === 'new') {
    let newTodo = prompt('Enter new todo')
    console.log(`${newTodo} added to list`)
    todos.push(newTodo)
  } else if (result === 'list') {
    console.log('**********')
    todos.forEach((todo, i) => {
      console.log(`${i}: ${todo}`)
    })
    console.log('**********')
  } else if (result === 'delete') {
    let toDeleteIndex = prompt('Enter a todo to delete')
    todos.splice(toDeleteIndex, 1)
    console.log('todo removed')
  } else {
    console.log('Pick a valid command!')
  }
}
