<script setup></script>

<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style>
/* estilo global mínimo (não scoped) */
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #111827;
  background: #f7f7fb;
}
.main-container {
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
</style>

<style scoped></style>
