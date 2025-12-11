<template>
  <section>
    <div class="grid">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.js'

export default {
  components: { ProjectCard },
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.grid {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}
</style>