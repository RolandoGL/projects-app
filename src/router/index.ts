import ProjectsLayout from '@/modules/projects/components/layouts/ProjectsLayout.vue';
import ProjectsView from '@/modules/projects/components/views/ProjectsView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsView,
        },
      ],
    },
  ],
});

export default router;
