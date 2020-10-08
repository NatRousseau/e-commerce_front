<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">Mon Agence</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/boutique">Boutique</router-link>
        </li>
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/panier">Panier</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/compte">Mon compte</router-link>
        </li>
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/">Se déconnecter</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/inscription">S'inscrire</router-link>
        </li>
        <li class="nav-item">
            <router-link class="is-tab nav-link" to="/connexion">Se Connecter</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>



</style>