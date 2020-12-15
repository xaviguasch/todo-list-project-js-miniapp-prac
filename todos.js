let input = ''
let todos = []

while (input !== 'quit' && input !== 'q') {
  input = prompt('What would you like to do?')

  if (input === 'new') {
    const newTodo = prompt('Enter new todo')
    console.log(`${newTodo} added to list`)
    todos.push(newTodo)
  } else if (input === 'list') {
    console.log('**********')
    todos.forEach((todo, i) => {
      console.log(`${i}: ${todo}`)
    })
    console.log('**********')
  } else if (input === 'delete') {
    const toDeleteIndex = parseInt(prompt('Enter a todo to delete'))
    if (!Number.isNaN(toDeleteIndex)) {
      todos.splice(toDeleteIndex, 1)
      console.log('todo removed')
    } else {
      console.log('Unknown Index')
    }
  } else {
    console.log('Pick a valid command!')
  }
}

console.log('OK, you quit the app!!!')
