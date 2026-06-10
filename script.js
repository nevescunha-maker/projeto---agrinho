// Sistema de troca de abas (Tabs) na seção de práticas sustentáveis
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-aba');
    const conteudos = document.querySelectorAll('.aba-item');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove classe ativa de todos os botões
            botoes.forEach(btn => btn.classList.remove('ativo'));
            // Remove classe ativa de todos os conteúdos
            conteudos.forEach(conteudo => conteudo.classList.remove('ativo'));

            // Adiciona classe ativa ao botão clicado
            botao.classList.add('ativo');

            // Pega o ID da aba correspondente através do atributo data-aba
            const idAba = botao.getAttribute('data-aba');
            const abaAlvo = document.getElementById(idAba);
            
            if (abaAlvo) {
                abaAlvo.classList.add('ativo');
            }
        });
    });
});
