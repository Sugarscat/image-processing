<template>
  <div class="job-loading-view">
    <div class="job-loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingJob"
}
</script>

<style scoped>
.job-loading-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.job-loading {
  width: 20px;
  height: 20px;
  animation: spinner-y0fdc1 2s infinite ease;
  transform-style: preserve-3d;
  position: relative;
  left: 0;
  top: 0;
}

.job-loading > div {
  background-color: rgba(0,77,255,0.2);
  height: 100%;
  position: absolute;
  width: 100%;
  border: 1px solid #004dff;
}

.job-loading div:nth-of-type(1) {
  transform: translateZ(-10px) rotateY(180deg);
}

.job-loading div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.job-loading div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.job-loading div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.job-loading div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.job-loading div:nth-of-type(6) {
  transform: translateZ(10px);
}

@keyframes spinner-y0fdc1 {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}
</style>