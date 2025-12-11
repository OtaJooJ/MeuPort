<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <small>© {{ year }} Otávio. Todos os direitos reservados.</small>
      </div>
      <div class="right">
        <a :href="github" target="_blank" rel="noreferrer">GitHub</a>
        <a :href="emailLink">Contato</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      github: 'https://github.com/OtaJooJ',
      emailLink: 'mailto:ota8661@gmail.com'
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid #e6e6ee;
  padding: 1rem;
  background: white;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}
.right a {
  margin-left: 0.75rem;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: 0.2s ease-in-out;
}
.right a:hover {
  text-decoration: underline;
  color: #386ad6;
}
.left small {
  margin-left: 0.75rem;
  text-decoration: none;
  color: #cecece;
  font-weight: 500;
}
@media (max-width: 600px) {
  .container { flex-direction: column; text-align:center; gap:0.5rem;}
  .right a { margin-left: 0.5rem; }
}
</style>