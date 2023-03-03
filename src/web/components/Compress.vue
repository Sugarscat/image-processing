<template>

</template>

<script>

import ProcessPage from "@/web/components/ProcessPage.vue";
import LoadingJob from "@/web/components/LoadingJob.vue";

export default {
  name: "Compress",
  components: {ProcessPage, LoadingJob},
}
</script>

<style scoped>
.job-setting-content .job-before {
  margin: 10px;
}

.job-setting-content .el-select {
  margin-right: 20px;
}

.job-setting-content .el-progress--line {
  margin-left: 40px;
  width: 350px;
}
</style>