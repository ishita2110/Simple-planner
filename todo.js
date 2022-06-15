let input = prompt("what would you like to do?");
const todos = ['chickens are cute', 'mommy chickens are powerful'];
while (input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log('***********');
        for (i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }

        console.log('***********');
    } else if (input == 'new') {

        const newTodo = prompt('ok! what is that new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input == 'delete') {
        const index = parseInt(prompt('enter an index to delete!'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`ok! deleted ${deleted[0]}`);
        } else {
            console.log('Undefined deleted!')


        }
    }
    input = prompt("what would you like to do?")

}
console.log("OK! QUIT THE APP")