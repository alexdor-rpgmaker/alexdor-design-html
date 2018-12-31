<template>
  <div>
    <!-- HEADER -->
    <header>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <img src="~/assets/img/header_logo.png" width="200" class = "imageflottante">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars fa-2x"></i>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Accueil <span class="sr-only">(actuel)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">News <span class="sr-only">(actuel)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="concours.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Session 2019
              </a>
              <div class="dropdown-menu colorlink" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Règlement</a>
                <a class="dropdown-item" href="#">Jeux en lice</a>
                <a class="dropdown-item" href="#">Inscrire un jeu</a>
                <div class = "dropdown-divider"></div>
                <a class="dropdown-item" href="#">Devenir juré</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="jeux.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Archives
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Anciennes sessions</a>
                <a class="dropdown-item" href="#">Jeux vainqueurs</a>
                <a class="dropdown-item" href="#">Tous les jeux</a>   
                <a class="dropdown-item" href="#">Séries de jeu</a> 
                <a class="dropdown-item" href="#">Un jeu au hasard</a> 
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="forum.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Forum
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Index du forum</a>
                <a class="dropdown-item" href="#">Nouveaux messages</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="communaute.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Communauté
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Derniers commentaires</a>
                <a class="dropdown-item" href="#">Liste des membres</a>
              </div>
            </li>
            <li>
              <select id="changeStyle" name="style">
                <option value="default">www/css/style.css</option>
                <option value="bis">www/css/style_bis.css</option>
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
