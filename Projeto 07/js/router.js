export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event // Use o event recebido como parâmetro. Se ele não existir, use window.event
        event.preventDefault() //evita o comportamento padrão, recarregar a página
        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle() {
        // pega apenas o pathname da URL atual (ex: "/about")
        const { pathname } = window.location

        // procura a rota correspondente ou usa a página 404 caso não encontre
        const route = this.routes[pathname] || this.routes[404]

        // Faz requisição para o arquivo da rota
        fetch(route)

            // converte a resposta para texto (HTML)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    }
}
