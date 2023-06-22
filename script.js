
// Obtenha uma referência ao formulário
const form = document.getElementById('cadastroForm');

// Adicione um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obtenha os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  // Crie um objeto com os dados a serem enviados para o banco de dados
  const dados = {
    nome: nome,
    email: email,
    telefone: telefone
  };

  // Use a função fetch para enviar os dados para o servidor
  fetch('/caminho-para-o-seu-script-de-servidor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Cadastro realizado com sucesso:', data);
    // Aqui você pode redirecionar o usuário para outra página ou fazer outras ações após o cadastro ser concluído
  })
  .catch(error => {
    console.error('Erro ao cadastrar:', error);
  });
});
