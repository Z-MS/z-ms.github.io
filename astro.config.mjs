import { defineConfig, passthroughImageService } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://z-ms.github.io',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: ['javascript', 'html'],
            wrap: true
        }
    },
    image: {
        service: passthroughImageService()
    },
    integrations: [
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ]
});
