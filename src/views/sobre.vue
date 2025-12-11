<template>
  <section class="sobre">
    <h1>Sobre mim</h1>
    <p class="lead">Sou um dev interessado em construir interfaces claras e performáticas, além de códigos limpos e legíveis.</p>

    <div class="skills">
      <div class="col">
        <h3>Hard skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Kotlin</li>
          <li>HTML & CSS</li>
          <li>React Native</li>
        </ul>
      </div>
      <div class="col">
        <h3>Soft skills</h3>
        <ul>
          <li>Comunicação</li>
          <li>Trabalho em equipe</li>
          <li>Resolução de problemas</li>
          <li>Organização</li>
        </ul>
      </div>
    </div>

    <h3>Contato</h3>
    <p>Me mande um email: <a :href="email">ota8661@gmail.com</a></p>
  </section>
</template>

<script>
export default {
  data() {
    return { email: 'mailto:ota8661@gmail.com' }
  }
}
</script>

<style scoped>
.sobre { background:white; padding:1rem; border-radius:12px; border:1px solid #eef0f8; }
.lead { color:#475569; }
.skills { display:flex; gap:2rem; margin-top:1rem; }
.col h3 { margin:0 0 0.5rem 0; }
.col ul { margin:0; padding-left:1rem; color:#374151; }
@media (max-width: 700px) {
  .skills { flex-direction: column; }
}
</style>