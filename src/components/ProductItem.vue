<template>
  <div class="card bg-gray100 p-3 p-sm-4 shadow-sm">
    <div class="card-img bg-cover" :style="`background-image: url(${prod.imageUrl})`">
      <img src="@/assets/images/card_img.png" alt="">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ prod.title }}</h5>
      <p class="card-text fs-7 text-secondary">{{ prod.content }}</p>
      <div class="text-end">
        <router-link :to="`/product/${prod.id}`" class="card-link btn btn-sm btn-outline-secondary stretched-link">查看產品</router-link>
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
.card-img {
  // height: 300px;
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  transition: all 0.5s;
}
.card:hover {
  .card-img {
    background-size: 130%;
  }
}
.card-text {
  height: 3rem;
  overflow: hidden;
}

.card-link {
  transition: all 0.75s;
}
</style>
