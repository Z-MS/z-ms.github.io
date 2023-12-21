import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://z-ms.github.io',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: ['javascript'],
            wrap: true
        }
    }
});
