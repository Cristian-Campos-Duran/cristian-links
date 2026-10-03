const LINKS = {
  "/cv": "https://DESTINO-DE-TU-CV.com",
  "/portfolio": "https://cristian-campos-duran.github.io/portafolio",
  "/linkedin": "https://www.linkedin.com/in/cristian-campos-duran/"
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Evita problemas con /cv/ frente a /cv
    let path = url.pathname;

    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    const destination = LINKS[path];

    if (destination) {
      return Response.redirect(destination, 302);
    }

    return new Response(
      "El enlace solicitado no existe.",
      {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=UTF-8"
        }
      }
    );
  }
};
