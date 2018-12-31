<template>
  <div>
    <!-- HEADER -->
    <header>
      <nav class="navbar navbar-expand-lg">
        <nuxt-link class="navbar-brand" to="/">
          <img src="~/assets/img/header_logo.png" width="200" class = "imageflottante">
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars fa-2x"></i>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/">Accueil <span class="sr-only">(actuel)</span></nuxt-link>
            </li>
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="">News <span class="sr-only">(actuel)</span></nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Session 2019
              </nuxt-link>
              <div class="dropdown-menu colorlink" aria-labelledby="navbarDropdown">
                <nuxt-link class="dropdown-item" to="">Règlement</nuxt-link>
                <nuxt-link class="dropdown-item" to="">Jeux en lice</nuxt-link>
                <nuxt-link class="dropdown-item" to="">Inscrire un jeu</nuxt-link>
                <div class = "dropdown-divider"></div>
                <nuxt-link class="dropdown-item" to="">Devenir juré</nuxt-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Archives
              </nuxt-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <nuxt-link class="dropdown-item" to="">Anciennes sessions</nuxt-link>
                <nuxt-link class="dropdown-item" to="">Jeux vainqueurs</nuxt-link>
                <nuxt-link class="dropdown-item" to="/jeux">Tous les jeux</nuxt-link>   
                <nuxt-link class="dropdown-item" to="">Séries de jeu</nuxt-link> 
                <nuxt-link class="dropdown-item" to="">Un jeu au hasard</nuxt-link> 
              </div>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Forum
              </nuxt-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <nuxt-link class="dropdown-item" to="/forum">Index du forum</nuxt-link>
                <nuxt-link class="dropdown-item" to="">Nouveaux messages</nuxt-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Communauté
              </nuxt-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <nuxt-link class="dropdown-item" to="">Derniers commentaires</nuxt-link>
                <nuxt-link class="dropdown-item" to="">Liste des membres</nuxt-link>
              </div>
            </li>
            <li>
              <select id="changeStyle" name="style">
                <option value="default">../assets/css/style.css</option>
                <option value="bis">../assets/css/style_bis.css</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- CONTENU PRINCIPAL -->
    <main>
      <nuxt/>
    </main>
    
    <!-- FOOTER-->
    <footer>
    </footer>
  </div>
</template>

<style>
</style>
