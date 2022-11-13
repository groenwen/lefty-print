<template>
  <div class="prod-item bg-gray100 p-4 p-sm-5">
    <div class="mb-4 prod-item-img " :style="`background-image: url(${prod.imageUrl})`">
      <img class="img-fluid" src="@/assets/images/card_img.png" alt="">
    </div>
    <div>
      <h5 class="mb-2">{{ prod.title }}</h5>
      <p class="mb-4 prod-item-text text-secondary small">{{ prod.content }}</p>
      <div class="text-end">
        <router-link :to="`/product/${prod.id}`" class="prod-item-btn btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['prod'],
  mounted () {
  }
}
</script>
<style lang="scss">
.prod-item {
  position: relative;
  box-shadow: 0 0 .75rem rgba($dark, .25);
  &-img {
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.5s;
  }
  &-text {
    height: 3rem;
    overflow: hidden;
  }
  &-btn {
    transition: all 0.75s;
  }
}
.prod-item:hover {
  .prod-item-img {
    background-size: 130%;
  }
}
</style>
