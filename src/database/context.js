const context = [
    { id: "1", setting: "Laboratório de Informática" },
    { id: "2", setting: "Escritório" },
    { id: "3", setting: "Sala de Professores" },
    { id: "4", setting: "Centro de Dados" },
    { id: "5", setting: "Sala de Reuniões" },
    { id: "6", setting: "Sala de Estar" },
    { id: "7", setting: "Estúdio de Design Gráfico" },
    { id: "8", setting: "Sala de Aula" },
    { id: "9", setting: "Fábrica de Carros" },
    { id: "10", setting: "Hotel" },
    { id: "11", setting: "Loja de Eletrônicos" },
    { id: "12", setting: "Consultório Odontológico" },
    { id: "13", setting: "Supermercado" },
    { id: "14", setting: "Shoppping" },
    { id: "15", setting: "Biblioteca" },
    { id: "16", setting: "Sala de Espera" },
    { id: "17", setting: "Área Hospitalar" },
    { id: "18", setting: "Oficina de Motos" },
    { id: "19", setting: "Restaurante" },
    { id: "20", setting: "Sala de Rede" },
    { id: "21", setting: "Laboratório de Robótica" },
    { id: "22", setting: "Sala de Videoconferência" },
    { id: "23", setting: "Academia" },
    { id: "24", setting: "Igreja" },
    { id: "25", setting: "Farmácia" },
    { id: "26", setting: "Estúdio de Fotografia" },
    { id: "27", setting: "Praça Pública" },
    { id: "28", setting: "Cinema" },
    { id: "29", setting: "Delegacia" },
    { id: "30", setting: "Loja de Roupas" },
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