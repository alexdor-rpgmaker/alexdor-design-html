<template>
  <div class="container">
    <div class="row text-center py-3">
      <div class="col-12">
        <h1>
          Bienvenue dans le site des Alex d'Or !
        </h1>
        <p class="pres">
          Bienvenue sur le site du concours des Alex d'or !<br>
          Chaque année depuis 2001,<br>
          il décerne des awards aux meilleurs jeux vidéo créés avec<br>
          le logiciel RPG Maker.<br>
          Que la compétition commence ! Plus d'infos
        </p>
      </div>
      <hr>
      <div class="col-12">
        <h2>
          Dernières news des Alex d'Or
        </h2>
      </div>
    </div>
    <div class="col-12">
      <div class="piece-of-news" style="border: 1px solid #555; margin-bottom: 20px; padding: 10px" v-for="pon in news" :key="pon.id">
        <h3 style="">{{pon.title}}</h3>
        <p style="font-style: italic">{{pon.created_at}}</p>
        <p style="font-weight: bold">{{pon.user.username}}</p>
        <div class="news-content" style="width: 100%;" v-html="pon.content"></div>
      </div>
    </div>
  </div>
</template>

<script>

function nl2br (str, isXhtml) {
  if (typeof str === 'undefined' || str === null) {
      return ''
  }
  var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br />' : '<br>'
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2')
}

export default {
  async asyncData({ $axios }) {
    const newsWithoutNewLines = await $axios.$get('https://www.alexdor.info/api/v0/news')
    const news = newsWithoutNewLines.map((pon) => {
      pon.content = nl2br(pon.content)
      return pon
    })
    return { news }
  }
}
</script>

<style>
</style>
