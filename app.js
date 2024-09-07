// console.log(dados);

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p class='texto-branco'>Por favor, preencha o campo de pesquisa.</p>";
        return
    }

    // Converter para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os dados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.Café.toLowerCase()
        descricao = dado.Caracteristicas.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Converter para minúsculas e remover acentos
        campoPesquisa = campoPesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        titulo = dado.Café.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        descricao = dado.Caracteristicas.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();



        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.Café}</a>
                </h2>
                <p class="descricao-meta">${dado.Caracteristicas}</p>
                <p class="descricao-meta">${dado.IdealPara}</p>
                <p class="descricao-meta">${dado.Variedades}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='texto-branco'>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
