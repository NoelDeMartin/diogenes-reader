import { defineRouteBindings, defineRoutes } from '@aerogel/plugin-routing';
import { getTrackedModels } from '@aerogel/plugin-soukai';

import Article from '@/models/Article';

import Home from './Home.vue';
import Reader from './Reader.vue';

export const bindings = defineRouteBindings({
    article(slug: string) {
        const articles = getTrackedModels(Article);

        return articles.find((article) => article.slug === slug);
    },
});

export default defineRoutes([
    { name: 'home', path: '/', component: Home },
    { name: 'read', path: '/read/:article', component: Reader },
]);
