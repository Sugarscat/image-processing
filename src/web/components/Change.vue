<template>
  <ProcessPage>
    <template #process-model-view>
      <div class="process-model-choice">
        <button class="btn-model btn-model-one">单张</button>
        <button class="btn-model btn-model-more">批量</button>
      </div>
    </template>
    <template #job-settings-view>
      <div class="job-setting-content">
        <div class="job-before">
          <el-select v-model="value" placeholder="Select">
            <el-option
                v-for="format in pictureFormat"
                :key="format.value"
                :label="format.label"
                :value="format.value"
            >
              <span style="float: left">{{ format.label }}</span>
            </el-option>
          </el-select>
          <el-button color="#549ced" :dark="isDark" plain :disabled = "false">开始处理</el-button>
        </div>
        <div class="job-after">
          <el-progress :percentage="percentage" :status="isSuccess"/>
          <el-button color="#549ced" :dark="isDark" plain :disabled = "true">保存图片</el-button>
        </div>
      </div>
    </template>
    <template #process-result-view>
      <div class="process-result-content">
        <LoadingJob v-show="isWorking"/>
        <el-upload
            class="upload-demo"
            drag
            action="localshot"
            multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            请将图片拖动到这或者 <em>点击添加</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              图片为本地处理，不会被上传至云端。
            </div>
          </template>
        </el-upload>
      </div>
    </template>
  </ProcessPage>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

import { ref } from 'vue'

import { useDark } from '@vueuse/core';
const isDark = useDark();

const value = ref('格式选择')
const pictureFormat = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]

const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<script>

import ProcessPage from "@/web/components/ProcessPage.vue";
import LoadingJob from "@/web/components/LoadingJob.vue";

export default {
  name: "Change",
  components: {ProcessPage, LoadingJob},
  data(){
    return{
      isWorking: false,
      hasResult: false,
      percentage: 0,
      isSuccess: '',
    }
  },
  created(){
    this.$nextTick(function(){

    })
  },
  methods:{

  }
}
</script>

<style scoped>

.job-setting-content .job-before,
.job-setting-content .job-after {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.job-setting-content .el-select {
  width: 260px;
  margin: 20px 0;
}

.job-setting-content .el-progress--line {
  margin: 20px 0;
  width: 300px;
}

</style>
