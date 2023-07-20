<script setup>
defineProps({
    message: String,
    color: String,
});
</script>

<template>
    <div v-show="message">
        <p :class="`text-sm ${color}`">
            {{ message }}
        </p>
    </div>
</template>
