<template>
    <Page>
        <article class="prose">
            <div class="not-prose flex flex-row items-center gap-2">
                <h2 class="text-2xl font-semibold">
                    {{ article.title }}
                </h2>
                <Button
                    v-if="article.externalUrl"
                    variant="ghost"
                    size="icon"
                    :href="article.externalUrl"
                >
                    <i-majesticons-external-link-line class="size-5" />
                </Button>
            </div>
            <div v-if="article.body" v-html="article.body" />
            <p v-else>
                {{ $t('articles.empty') }}
            </p>
        </article>
    </Page>
</template>

<script setup lang="ts">
import type Article from '@/models/Article';

defineProps<{ article: Article }>();
</script>
