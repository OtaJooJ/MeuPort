<template>
  <header class="header">
    <div class="inner">
      <div class="brand">
        <a href="/" class="logo">MeuPort</a>
      </div>

      <nav class="nav" :class="{ open: mobileOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <button class="burger" @click="toggleMobile" aria-label="open menu">
        <span v-if="!mobileOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileOpen: false,
      githubUrl: 'https://github.com/OtaJooJ'
    }
  },
  methods: {
    toggleMobile() {
      this.mobileOpen = !this.mobileOpen
    }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #e6e6ee;
  z-index: 30;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
}
.brand .logo {
  font-weight: 700;
  font-size: 1.1rem;
  color: #111827;
  text-decoration: none;
}
.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: 0.3s ease-in-out;
}
.nav a:hover {
  text-decoration: underline;
  color: #386ad6;
}
.burger {
  display: none;
  background: none;
  border: none;
  font-size: 1.25rem;
}

/* mobile */
@media (max-width: 768px) {
  .nav {
    position: absolute;
    right: 1rem;
    top: 60px;
    background: white;
    flex-direction: column;
    padding: 0.5rem 1rem;
    border: 1px solid #eee;
    box-shadow: 0 6px 18px rgba(16,24,40,0.06);
    display: none;
  }
  .nav.open {
    display: flex;
  }
  .burger {
    display: block;
  }
}
</style>