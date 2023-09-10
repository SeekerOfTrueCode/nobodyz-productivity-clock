import { h } from 'vue';
import StoryWrapper from '../wrappers/vuetify.vue';

export const withVuetify = (storyFn, context) => {
    const story = storyFn();

    return () => {
        return h(
            StoryWrapper,
            {}, // Props for StoryWrapper
            {
                // Puts your story into StoryWrapper's "story" slot with your story args
                story: () => h(story, { ...context.args }),
            }
        );
    };
};