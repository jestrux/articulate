<template>
    <div class="alert-box" :class="options.type">
        <svg v-if="options.type === 'info'" width="24px" height="24px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        <svg v-else width="24px" height="24px" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
        <!-- <span class="alert-name">Note:</span> -->
        {{options.text}}
    </div>
</template>

<script>
import BcElement from './BcElement.vue';
export default {
    extends: BcElement
}
</script>