<template>
  <div class="d-flex align-items-end">
    <img class="me-3 headtitle-img" src="@/assets/images/people01.svg" alt="">
    <div>
      <span class="mb-3 px-4 py-2 d-inline-block text-white small lh-1 bg-primary rounded-pill position-relative dialog">{{ dialog }}</span>
      <h3 class="mb-0 fw-bolder"><span class="text-primary">{{ primaryText }}</span>{{ darkText }}</h3>
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
  content: "";
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border: 8px solid;
  border-color: $primary transparent transparent transparent;
}
.headtitle-img {
  height: 5rem;
}
</style>
