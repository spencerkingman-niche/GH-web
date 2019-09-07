import { addNewTask, updateTask } from './server'

(async function myFunc() {
  await addNewTask({
    name: 'myTask',
    id: '12346',
  })

  await updateTask ({
    id: '12346',
    name: "My task - UPDATED!!!"
  })
})()
