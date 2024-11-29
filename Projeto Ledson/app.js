// Define as páginas
const routes = {
  home: `<h1>Bem-vindo!</h1><p>Essa é a página inicial do sistema de rotas.</p>`,
  about: `<h1>Sobre Nós</h1><p>Aqui estão informações sobre o projeto ou a equipe.</p>`,
  contact: `<h1>Contato</h1><p>Entre em contato conosco através do formulário abaixo:</p>
    <form>
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
      <button type="submit">Enviar</button>
    </form>`
};

// Função para navegar entre as rotas
function navigate(route) {
  const app = document.getElementById("app");
  app.innerHTML = routes[route] || `<h1>404</h1><p>Página não encontrada.</p>`;
}

// Adiciona evento aos links do menu
document.querySelectorAll("a[data-route]").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const route = event.target.getAttribute("data-route");
    navigate(route);
  });
});

// Carrega a página inicial por padrão
navigate("home");
