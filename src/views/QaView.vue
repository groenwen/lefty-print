<template>
  <div class="pt-lg-6 pb-8">
    <v-loading :active="isLoading"></v-loading>
    <SweetAlert></SweetAlert>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-xl-3">
          <div class="px-4 py-5 h-100 bg-gray100 list-group-container">
            <HeadTitle class="mx-auto mb-5" dialog="Q&A" primary-text="" dark-text="印刷小知識"></HeadTitle>
            <div class="list-group flex-lg-column flex-row" id="list-tab" role="tablist">
              <a class="mb-lg-2 list-group-item list-group-item-action active" id="list-color-list" data-bs-toggle="list" href="#list-color" role="tab" aria-controls="list-color">色差篇</a>
              <a class="mb-lg-2 list-group-item list-group-item-action" id="list-file-list" data-bs-toggle="list" href="#list-file" role="tab" aria-controls="list-file">檔案篇</a>
              <a class="list-group-item list-group-item-action" id="list-final-list" data-bs-toggle="list" href="#list-final" role="tab" aria-controls="list-final">成品篇</a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-xl-9">
          <div class="px-3 py-5 p-lg-5">
            <div class="tab-content " id="nav-tabContent">
              <!-- 色差篇 -->
              <div class="tab-pane fade show active" id="list-color" role="tabpanel" aria-labelledby="list-color-list">
                <div class="accordion accordion-flush" id="accordionColor">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="color01">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-color01" aria-expanded="false" aria-controls="panelsStayOpen-color01">
                        RGB 與 CMYK 的差異
                      </button>
                    </h2>
                    <div id="panelsStayOpen-color01" class="accordion-collapse collapse show" aria-labelledby="color01">
                      <div class="accordion-body">
                        在螢幕上看到的畫面是以 RGB (色光三原色)呈現，由於 RGB 色域廣所以色彩相對豐富(可以看見螢光色)，而印刷品是以 CMYK 的四色油墨調製而成，所以色域有限。
                        <div class="text-center mt-3">
                          <img class="mb-3 img-fluid" src="@/assets/images/qa01.jpg" alt="">
                          <p class="d-inline-block rounded-pill px-4 py-1 bg-gray200 text-dark">
                            由RGB轉換為CMYK，這之間的顏色差距就形成了色差
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="color02">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-color02" aria-expanded="false" aria-controls="panelsStayOpen-color02">
                        想像中的顏色是不能以螢幕的顏色來作判斷
                      </button>
                    </h2>
                    <div id="panelsStayOpen-color02" class="accordion-collapse collapse show" aria-labelledby="color02">
                      <div class="accordion-body">
                        每台螢幕由於廠牌、型號、技術..甚至明暗度及色彩調校都不同 所以無法依據螢幕呈現的畫面來當作印刷成品顏色的判斷。<br>
                        <div class="text-center mt-3">
                          <img class="img-fluid" src="@/assets/images/qa02.jpg" alt="">
                          <p class="d-inline-block rounded-pill px-4 py-1 bg-gray200 text-dark">
                            每台螢幕在呈現同一張圖都不會相同的
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="color03">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-color03" aria-expanded="false" aria-controls="panelsStayOpen-color03">
                        顏色也會因為紙張的不同而有所改變
                      </button>
                    </h2>
                    <div id="panelsStayOpen-color03" class="accordion-collapse collapse show" aria-labelledby="color03">
                      <div class="accordion-body">
                        紙張有多種特性，纖維長短、吸墨量、色澤、毛細孔、厚薄、光澤度、塗佈與非塗佈、紋路、成份構成...，這些都會直接影響最後成品的顏色。
                        <div class="text-center mt-3">
                          <img class="mb-3 img-fluid" src="@/assets/images/qa03.jpg" alt="">
                          <p class="d-inline-block rounded-pill px-4 py-1 bg-gray200 text-dark">
                            由RGB轉換為CMYK，這之間的顏色差距就形成了色差
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 印刷檔案篇 -->
              <div class="tab-pane fade" id="list-file" role="tabpanel" aria-labelledby="list-file-list">
                <div class="accordion accordion-flush" id="accordionfile">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="file01">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-file01" aria-expanded="true" aria-controls="panelsStayOpen-file01">
                        什麼是出血？
                      </button>
                    </h2>
                    <div id="panelsStayOpen-file01" class="accordion-collapse collapse show" aria-labelledby="file01">
                      <div class="accordion-body">
                        為了避免裁切誤差而產生白邊，因此如果您有背景底圖必須延伸至出血尺寸。
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="file02">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-file02" aria-expanded="false" aria-controls="panelsStayOpen-file02">
                        印刷解析度 300dpi
                      </button>
                    </h2>
                    <div id="panelsStayOpen-file02" class="accordion-collapse collapse show" aria-labelledby="file02">
                      <div class="accordion-body">
                        分為 螢幕解析度 72dpi(dots/per inch) 及 印刷解析度 300dpi。在螢幕上看 1 英吋只要 72 個 Dots(點)就可以看得清楚，印刷要求比較高為 1 英吋要 300 Dots(點)才能印的清楚。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 印刷成品篇 -->
              <div class="tab-pane fade" id="list-final" role="tabpanel" aria-labelledby="list-final-list">
                <div class="accordion accordion-flush" id="accordionFinal">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="final01">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-final01" aria-expanded="false" aria-controls="panelsStayOpen-final01">
                        我使用 5pt 的字體，印出來怎麼這麼小？
                      </button>
                    </h2>
                    <div id="panelsStayOpen-final01" class="accordion-collapse collapse show" aria-labelledby="final01">
                      <div class="accordion-body">
                        一般名片文字建議在 7pt 以上，DM 文字在 8pt 以上，建議設計完後將整個設計檔縮小至名片大小, 並檢視文字或圖片大小是否合宜。
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="final02">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-final02" aria-expanded="false" aria-controls="panelsStayOpen-final02">
                        顏色也會因為紙張的不同而有所改變
                      </button>
                    </h2>
                    <div id="panelsStayOpen-final02" class="accordion-collapse collapse show" aria-labelledby="final02">
                      <div class="accordion-body">
                        紙張有多種特性，纖維長短、吸墨量、色澤、毛細孔、厚薄、光澤度、塗佈與非塗佈、紋路、成份構成...，這些都會直接影響最後成品的顏色。
                        <div class="text-center mt-3">
                          <img class="mb-3" src="@/assets/images/qa03.jpg" alt="">
                          <p class="d-inline-block rounded-pill px-4 py-1 bg-gray200 text-dark">
                            由RGB轉換為CMYK，這之間的顏色差距就形成了色差
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.list-group-container {
  @include media-breakpoint-up(lg) {
    min-height: 100vw;
  }
}
.accordion-button {
  letter-spacing: 0.05em;
}
</style>
<script>
import HeadTitle from '@/components/HeadTitle.vue'
import SweetAlert from '@/components/SweetAlert.vue'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/tab'
export default {
  data () {
    return {
      VUE_APP: `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}`,
      isLoading: true,
      allProds: [],
      prods: []
    }
  },
  components: { SweetAlert, HeadTitle },
  mounted () {
    this.isLoading = false
  }
}
</script>
