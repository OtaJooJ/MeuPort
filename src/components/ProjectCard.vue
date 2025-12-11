<template>
  <article class="card">
    <header>
      <h3 class="title">{{ project.title }}</h3>
      <p class="desc">{{ project.description }}</p>
    </header>

    <div class="tags">
      <span v-for="(t, idx) in project.technologies" :key="idx" class="tag">{{ t }}</span>
    </div>

    <footer class="actions">
      <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer" class="btn">GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer" class="btn outline">Demo</a>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    project: { type: Object, required: true }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #e9e9f0;
  border-radius: 12px;
  padding: 1rem;
  display:flex;
  flex-direction:column;
  gap:0.75rem;
  box-shadow: 0 6px 18px rgba(16,24,40,0.03);
  transition: 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.title { margin:0; font-size:1.05rem; font-weight:600; color:#0f1724; }
.desc { margin:0; color:#475569; font-size:0.95rem; }
.tags { display:flex; gap:0.5rem; flex-wrap:wrap; }
.tag { background:#f1f5f9; padding:0.25rem 0.5rem; border-radius:8px; font-size:0.8rem; color:#334155; }
.actions { display:flex; gap:0.5rem; margin-top:auto; }
.btn {
  text-decoration:none;
  padding:0.5rem 0.75rem;
  border-radius:8px;
  background:#111827;
  color:white;
  font-weight:600;
  font-size:0.9rem;
  transition: 0.2s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
  background:#386ad6;
}
.btn:active {
  background: #ffffff;
  border:2px solid #386ad6;
  color:#386ad6;
}
.btn.outline {
  background: transparent;
  border:1px solid #111827;
  color:#111827;
  transition: 0.2s ease-in-out;
}
.btn.outline:hover {
  background: transparent;
  border:1px solid #386ad6;
  color:#386ad6;
}
.btn.outline:active {
  background: #386ad6;
  border:2px solid #ffffff;
  color:#ffffff;
}
</style>