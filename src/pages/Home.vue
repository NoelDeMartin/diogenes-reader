<template>
    <Page>
        <div class="prose">
            <ol>
                <li v-for="article of articles" :key="article.url">
                    <Link route="read" :route-params="{ article: article.slug }">
                        {{ article.title }}
                    </Link>
                </li>
            </ol>
        </div>
        <Button @click="addArticle()">
            {{ $t('articles.add') }}
        </Button>
    </Page>
</template>

<script setup lang="ts">
import Article from '@/models/Article';
import { UI, translate } from '@aerogel/core';
import { useModelCollection } from '@aerogel/plugin-soukai';
import { Readability } from '@mozilla/readability';

const articles = useModelCollection(Article);

async function addArticle() {
    const url = await UI.prompt(translate('articles.prompt'), {
        label: translate('articles.url'),
    });

    if (!url) {
        return;
    }

    await UI.loading(translate('articles.adding'), async () => {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const result = (await response.json()) as { contents: string };

        const domParser = new DOMParser();
        const article = new Readability(domParser.parseFromString(result.contents, 'text/html')).parse();

        if (!article) {
            return;
        }

        await Article.create({
            title: article.title ?? url,
            description: article.excerpt,
            body: article.content,
            externalUrl: url,
        });
    });
}
</script>
