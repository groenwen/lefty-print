<template>
  <div class="mt-7 bg-gray-200 p-sm-5 px-4 py-5">
    <div class="container">
      <div class="d-flex flex-lg-row flex-column justify-content-between">
        <div class="d-flex flex-md-row flex-column justify-content-md-center align-items-md-center align-items-start">
          <img class="me-7 mb-md-0 mb-3" src="@/assets/images/logo_dark.svg" height="28" alt="">
          <router-link to="/about" class="me-5 text-dark">關於 Print</router-link>
          <router-link to="/products" class="me-5 text-dark">所有產品</router-link>
          <ul class="list-unstyled">
            <li>
              <span class="material-symbols-sharp align-middle fs-6 me-2">headset_mic</span>( 02 ) 2222 - 2222
            </li>
            <li>
              <span class="material-symbols-sharp align-middle fs-6 me-2">drafts</span>yuwen7005@gmail.com
            </li>
          </ul>
        </div>
        <router-link to="/admin" class="btn btn-sm btn-outline-secondary align-self-end">管理員登入</router-link>
      </div>
    </div>
  </div>
  <div class="bg-dark p-3">
    <p class="text-center text-white fs-7">Copyright © Print 2022 | <span class="d-md-inline d-block">僅個人作品，無商業用途</span></p>
  </div>
</template>
