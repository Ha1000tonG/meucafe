let dados = [
    {
        Café: "Café Suave",
        Caracteristicas: "Características: Torra clara. Sabor delicado, frutado, com notas florais e acidez leve. Aroma suave e delicado. Cor mais clara, quase caramelo",
        IdealPara: "IdealPara: Quem busca um café mais leve, para momentos de relaxamento ou acompanhamento de doces.",
        Variedades: "Variedades: Geralmente Arábica de alta qualidade, cultivado em regiões específicas.",
        tags: "aroma, cor, acidez, cafe"
    },
    {
        Café: "Café Médio",
        Caracteristicas: "Características:Torra média. Sabor equilibrado, com notas de chocolate e caramelo, corpo mais encorpado e acidez moderada. Aroma agradável com notas de chocolate e caramelo. Cor acastanhada, com reflexos oleosos.",
        IdealPara: "IdealPara: Quem busca um café versátil, para o dia a dia ou acompanhamento de pratos salgados.",
        Variedades: "Variedades: Mistura de Arábica e Robusta, para um sabor mais encorpado.",
        tags: "aroma, cor, acidez, cafe"
    },
    {
        Café: "Café Forte",
        Caracteristicas: "Características: Torra escura. Sabor intenso, com notas de chocolate amargo, caramelo e especiarias, corpo robusto e baixa acidez. Aroma intenso e encorpado, com notas de chocolate e torrado. Cor escura, quase preta, com brilho oleoso.",
        IdealPara: "IdealPara: Quem busca um café forte e encorpado, para momentos de maior concentração ou acompanhamento de sobremesas intensas.",
        Variedades: "Variedades: Predominantemente Robusta, para um sabor mais forte e amargo.",
        tags: "aroma, cor, acidez, cafe"
    },
    {
        Café: "Café Extra Forte",
        Caracteristicas: "Características: Torra muito Escura. Sabor extremamente intenso, com notas de queimado, amargor acentuado e corpo muito encorpado. Aroma intenso e tostado, com notas de queimado. Cor preta, com brilho oleoso.",
        IdealPara: "IdealPara: Amantes de café muito forte, para momentos especiais ou acompanhamento de pratos muito intensos.",
        Variedades: "Variedades: Robusta de alta qualidade, torrado por longos períodos.",
        tags: "aroma, cor, acidez, cafe"
    }
];


function negrito(dados) {
    dados.forEach(cafe => {
        // Propriedades a serem formatadas
        const propriedades = ['Caracteristicas', 'IdealPara', 'Variedades'];

        propriedades.forEach(propriedade => {
            if (cafe[propriedade]) {
                const partes = cafe[propriedade].split(':');
                cafe[propriedade] = `<strong>${partes[0]}:</strong> ${partes[1]}`;
            }
        });
    });
}

function quebrarLinhas(dados) {
    // Itera sobre cada objeto (café) no array de dados
    dados.forEach(cafe => {
        // Substitui cada ponto por um ponto seguido de uma quebra de linha
        // A expressão regular /\./g encontra todos os pontos e o substitui
        cafe.Caracteristicas = cafe.Caracteristicas.replace(/\./g, '.\n');
    });
}

// Chamando a função para formatar os dados
negrito(dados);
// Agora, a propriedade "Características" de cada objeto está formatada
console.log(dados);

// Chamando a função para formatar os dados
quebrarLinhas(dados);
// Exibe as características do primeiro café com as quebras de linha
console.log(dados[0].Caracteristicas);