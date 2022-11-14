<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-md-4">
        <router-link to="/quote" class="service-item mx-xl-2 h-100 d-flex flex-column rounded-4 px-lg-5 py-4 px-4">
          <div class="mb-3">
            <span class="material-symbols-outlined text-primary fs-1">request_quote</span>
          </div>
          <h5 class="mb-3 text-dark">特殊尺寸報價</h5>
          <p class="flex-fill mb-3 text-secondary">找不到需要的尺寸？請至此頁面計算所需模數後，將由專人為您報價。</p>
          <div class="text-end">
            <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
          </div>
        </router-link>
      </div>
      <div class="col-6 col-md-4">
        <router-link to="/days" class="service-item mx-xl-2 h-100 d-flex flex-column rounded-4 px-lg-5 py-4 px-4">
          <div class="mb-3">
            <span class="material-symbols-sharp text-primary fs-1">calendar_month</span>
          </div>
          <h5 class="mb-3 text-dark">印刷工作天數</h5>
          <p class="flex-fill mb-3 text-secondary">查詢要印製的產品工作天數，了解大概的出貨時間。</p>
          <div class="text-end">
            <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
          </div>
        </router-link>
      </div>
      <div class="col-6 col-md-4">
        <router-link to="/qa" class="service-item mx-xl-2 h-100 d-flex flex-column rounded-4 px-lg-5 py-4 px-4">
          <div class="mb-3">
            <span class="material-symbols-sharp text-primary fs-1">emoji_objects</span>
          </div>
          <h5 class="mb-3 text-dark">印刷小知識</h5>
          <p class="flex-fill mb-3 text-secondary">印刷的眉眉角角報你知，減少被退件機會。</p>
          <div class="text-end">
            <span class="material-symbols-outlined text-primary fs-3">keyboard_double_arrow_right</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.service-item {
  display: inline-block;
  border: 1px solid $light;
  background-color: rgba($white, .7);
  &:hover {
    border: 1px solid $primary;
  }
}
</style>
