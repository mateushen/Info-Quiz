const context = [
    { id: "1", setting: "Invenções que Mudaram a História" },
    { id: "2", setting: "Modelos de Carro" },
    { id: "3", setting: "Profissões que Exigem Licença Especial" },
    { id: "4", setting: "Materiais Usados na Construção de Pontes" },
    { id: "5", setting: "Marcas de Celulares" },
    { id: "6", setting: "Marcas de Computadores ou Notebook" },
    { id: "7", setting: "Personagens da Mitologia Grega" },
    { id: "8", setting: "Plantas Utilizadas na Produção de Medicamentos" },
    { id: "9", setting: "Pratos Típicos Brasileiros" },
    { id: "10", setting: "Marcas de Carro" },
    { id: "11", setting: "Dispositivos Usados em Cirurgias" },
    { id: "12", setting: "Instrumentos Musicais" },
    { id: "13", setting: "Jogos de Videogame Populares" },
    { id: "14", setting: "Personagens de Desenhos Animados" },
    { id: "15", setting: "Personagens de Filmes" },
    { id: "16", setting: "Obras Literárias Famosas" },
    { id: "17", setting: "Marcas de Roupas de Luxo" },
    { id: "18", setting: "Séries de TV Populares" },
    { id: "19", setting: "Plantas Aquáticas" },
    { id: "20", setting: "Montanhas ou Cordilheiras Famosas" },
    { id: "21", setting: "Rios Famosos do Mundo" },
    { id: "22", setting: "Marcas de Perfumes" },
    { id: "23", setting: "Profissões Ligadas à Saúde" },
    { id: "24", setting: "Capitais de Países" },
    { id: "25", setting: "Moedas de Países" },
    { id: "26", setting: "Monumentos Históricos" },
    { id: "27", setting: "Obras de Arte" },
    { id: "28", setting: "Bebidas Alcoólicas" },
    { id: "29", setting: "Bebidas Não Alcoólicas" },
    { id: "30", setting: "Peças de Vestuário" },
    { id: "31", setting: "Acessórios de Moda" },
    { id: "32", setting: "Ferramentas de Oficina" },
    { id: "33", setting: "Times de Futebol" },
    { id: "34", setting: "Seleções Campeãs de Copa do Mundo" }
];

// Função para sortear um cenário aleatório
export function getRandomSetting() {
    const randomIndex = Math.floor(Math.random() * context.length);
    return context[randomIndex];
}

// Função para sortear uma letra
export function getRandomLetter() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V'];
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}