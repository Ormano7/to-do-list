const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-tasks')


let myLyst = []



function addNewTask(){
    myLyst.push ({
        task: input.value,
        concluida: false,
    })

    input.value = ''

    showTask()
    
}

function showTask(){

    let newLi = ''

    myLyst.forEach((item, position) => {

        newLi = newLi + `

            <li class="task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="check" onclick="concluirTarefa(${position})">
                <p>${item.task}</p>  
                <img src="img/trash.png" alt="excluir" onclick="deletarItem(${position})">  
            </li>
            
            `
    })

    completeList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(myLyst))
   
}

function concluirTarefa(position){
    myLyst[position].concluida = !myLyst[position].concluida

    showTask()
}

function deletarItem(position){
    myLyst.splice(position, 1)
    
    showTask()
}

function reloadTask (){
    const taskLocalStorage = localStorage.getItem('lista')

    if(taskLocalStorage) {
        myLyst = JSON.parse(taskLocalStorage)
    }

    showTask()
}


button.addEventListener ('click', addNewTask)