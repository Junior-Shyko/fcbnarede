<script setup>
const props = defineProps({
  phone: String
});
</script>

<template>
    <div v-for="item in props.phone">
    {{ item.number }}
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>