<template>
  <div class="pt-6 pb-8">
    <v-loading :active="isLoading"></v-loading>
    <SweetAlert></SweetAlert>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3">
          <div class="list-group border border-light" id="list-tab" role="tablist">
            <HeadTitle class="mx-auto py-5" dialog="Q&A" primary-text="" dark-text="印刷小知識"></HeadTitle>
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">色差篇</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">尺寸篇</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">完稿篇</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
          </div>
        </div>
        <div class="col-9">
          <div class="p-5">
            <div class="tab-content " id="nav-tabContent">
              <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        為什麼印刷品比螢幕上看到的顏色較暗沉?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div class="accordion-body">
                        螢幕為RGB光色域，印刷為CMYK墨水色，色域不同一定會產生色差，因此印刷會比螢幕看到還暗沉，這是實務上無法解決的問題。
                        <img src="@/assets/images/qa01.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        印刷解析度 300dpi
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        解析度分為螢幕解析度 72dpi(dots/per inch) 及 印刷解析度 300dpi。在螢幕上看1英吋只要72個Dots(點)就可以看得清楚，印刷要求比較高為1英吋要300 Dots(點)才能印的清楚。
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        出血尺寸
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body">
                        為了避免裁切誤差而產生白邊，因此如果您有背景底圖必須延伸至出血尺寸。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">..2.</div>
              <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">.3..</div>
              <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">..4.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadTitle from '@/components/HeadTitle.vue'
import SweetAlert from '@/components/SweetAlert.vue'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/tab'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: false,
      allProds: [],
      prods: []
    }
  },
  components: { SweetAlert, HeadTitle },
  methods: {
  },
  mounted () {

  }
}
</script>
