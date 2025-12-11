<template>
  <section>
    <header class="hero">
      <h1>Olá — eu sou Otávio</h1>
      <p>Desenvolvedor back-end e front-end focado em aplicações web modernas. Aqui você encontra meus projetos e minha jornada.</p>
    </header>

    <h2 class="section-title">Projetos</h2>
    <ProjectsList />
  </section>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue'

export default {
  components: { ProjectsList }
}
</script>

<style scoped>
.hero { background: linear-gradient(180deg,#fff 0%, #fbfbff 100%); padding:1.5rem; border-radius:12px; margin-bottom:1.25rem; }
.hero h1 { margin:0; font-size:1.8rem; }
.section-title { margin: 1.25rem 0 0.5rem; font-size:1.25rem; color:#0f1724; }
</style>