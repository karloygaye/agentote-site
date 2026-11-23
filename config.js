// Configuration du site vitrine AgentOte.
// apiBase : URL de l'API AgentOte qui reçoit le formulaire pilote (POST /v1/pilot-requests).
//  - en local (npm run site, http://localhost:8080) : l'API locale sur le port 3000 ;
//  - ailleurs (GitHub Pages) : null tant qu'aucune API n'est publiée → formulaire fermé avec un message honnête.
// Quand l'API sera hébergée publiquement, remplacer null par son URL (ex. "https://api.example.com") et ajouter
// l'origine du site à SITE_ORIGINS côté API.
(function () {
  var h = location.hostname;
  var local = h === "localhost" || h === "127.0.0.1" || h === "[::1]";
  window.AGENTOTE_SITE = {
    apiBase: local ? location.protocol.replace("file:", "http:") + "//" + h + ":3000" : null,
  };
})();
