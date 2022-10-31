<template>
  <div class="bg-light py-6">
    <div class="container">
      <div class="d-flex align-items-end">
        <img class="me-3" src="@/assets/images/people01.svg" height="80" alt="">
        <div>
          <span class="d-inline-block mb-3 px-4 py-2 text-white lh-1 bg-primary rounded-pill position-relative dialog">{{ dialog }}</span>
          <h2 class="mb-0 fw-bolder"><span class="text-primary">{{ primaryText }}</span>{{ darkText }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dialog', 'primaryText', 'darkText']

}
</script>
<style lang="scss">
.dialog::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border: 8px solid;
  border-color: $primary transparent transparent transparent;
}
</style>
