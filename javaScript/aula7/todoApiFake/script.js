const urlApi = 'http://localhost:3000/tarefas';

// Função para carregar todas as tarefas com base no filtro
function carregarTarefas(filtro = 'todos') {
    fetch(urlApi)
        .then(resposta => resposta.json())
        .then(tarefas => {
            const listaTarefas = document.getElementById('lista-tarefas');
            listaTarefas.innerHTML = '';

            // Filtrar tarefas com base no filtro selecionado
            let tarefasFiltradas = tarefas;
            if (filtro === 'concluidas') {
                tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida);
            } else if (filtro === 'pendentes') {
                tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida);
            }

            tarefasFiltradas.forEach(tarefa => {
                const itemTarefa = document.createElement('li');
                itemTarefa.className = `item-tarefa ${tarefa.concluida ? 'concluida' : ''}`;
                itemTarefa.innerHTML = `
                    <input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onchange="alternarConclusao('${tarefa.id}', this.checked)">
                    <span>
                        <strong>${tarefa.titulo}</strong>: ${tarefa.descricao}
                    </span>
                    <div>
                        <i class="fas fa-edit editar" onclick="editarTarefa('${tarefa.id}')"></i>
                        <i class="fas fa-trash excluir" onclick="excluirTarefa('${tarefa.id}')"></i>
                    </div>
                `;
                listaTarefas.appendChild(itemTarefa);
            });
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
}

// Função para aplicar o filtro
function aplicarFiltro() {
    const filtroSelecionado = document.getElementById('filtro-tarefas').value;
    carregarTarefas(filtroSelecionado);
}

// Adiciona evento para o filtro
document.getElementById('filtro-tarefas').addEventListener('change', aplicarFiltro);

// Função para adicionar uma nova tarefa
document.getElementById('form-tarefa').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo-tarefa').value;
    const descricao = document.getElementById('descricao-tarefa').value;

    const novaTarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false
    };

    fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaTarefa)
    })
    .then(() => {
        carregarTarefas();
        document.getElementById('form-tarefa').reset();
    })
    .catch(error => console.error('Erro ao adicionar tarefa:', error));
});

// Função para editar uma tarefa existente
function editarTarefa(id) {
    fetch(`${urlApi}/${id}`)
        .then(resposta => resposta.json())
        .then(tarefa => {
            const titulo = prompt('Novo título:', tarefa.titulo);
            const descricao = prompt('Nova descrição:', tarefa.descricao);

            if (titulo !== null && descricao !== null) {
                const tarefaAtualizada = {
                    titulo: titulo.trim() !== '' ? titulo : tarefa.titulo,
                    descricao: descricao.trim() !== '' ? descricao : tarefa.descricao
                };

                fetch(`${urlApi}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tarefaAtualizada)
                })
                .then(() => carregarTarefas())
                .catch(error => console.error('Erro ao editar tarefa:', error));
            }
        })
        .catch(error => console.error('Erro ao obter tarefa para edição:', error));
}

// Função para excluir uma tarefa
function excluirTarefa(id) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        fetch(`${urlApi}/${id}`, {
            method: 'DELETE'
        })
        .then(() => carregarTarefas())
        .catch(error => console.error('Erro ao excluir tarefa:', error));
    }
}

// Função para marcar/desmarcar uma tarefa como concluída
function alternarConclusao(id, concluida) {
    fetch(`${urlApi}/${id}`)
        .then(resposta => resposta.json())
        .then(tarefa => {
            const tarefaAtualizada = {
                ...tarefa,
                concluida: concluida
            };

            fetch(`${urlApi}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarefaAtualizada)
            })
            .then(() => carregarTarefas())
            .catch(error => console.error('Erro ao alternar conclusão:', error));
        })
        .catch(error => console.error('Erro ao obter tarefa para alternar conclusão:', error));
}

// Carrega as tarefas ao iniciar
carregarTarefas();
