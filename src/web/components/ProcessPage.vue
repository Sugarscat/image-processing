<template>
  <div class="process-model">
    <slot name="process-model-view"></slot>
  </div>
  <div class="job-settings">
    <slot name="job-settings-view"></slot>
  </div>
  <div class="process-result">
    <slot name="process-result-view"></slot>
  </div>
</template>

<script>
export default {
  name: "ProcessPage"
}
</script>

<style scoped>
.process-model {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.job-settings {
  width: 100%;
}

.process-result {
  width: 100%;
}

</style>