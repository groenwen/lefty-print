<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-6">
        <form class="row align-items-end" @submit.prevent="uploadFile">
          <div class="col-auto">
            <label for="formFile" class="form-label">上傳檔案</label>
            <input class="form-control " type="file" id="fileToUpload" name="file-to-upload" accept="image/png, image/jpeg" @change="choseFile">
          </div>
          <div class="col-auto">
            <input class="btn btn-secondary" type="submit" value="上傳">
          </div>
        </form>
      </div>
    </div>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">圖片網址</label>
      <textarea class="form-control" id="imageUrl" rows="3" v-model="imageUrl"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      file: {},
      imageUrl: ''
    }
  },
  methods: {
    choseFile (e) {
      this.file = e.target.files[0]
      console.log(this.file)
    },
    uploadFile () {
      console.log('hello')
      // https://storage.googleapis.com/vue-course-api.appspot.com/groen/1662542456942.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NOdvrzMdIuK4adkozAfnnoudWvsKUw9F8u%2BfZ4G6zKaEgrW8UoBzE2xbmXYayI%2FkA1SPeOC9fgJloqCdO%2BwYWY2avZVbqize%2BFfDGoXsF%2F6Ic8pY4XFbk0WuLk4UVvOLwuPsRFWQV4rkzFRVNYEYDWjJnAEAfZnHsJmbx3Xudmp%2FKOT%2FLcYXHm1VWdjtT8tzRnvck4dnF%2B2B7Szohtbv%2FJp1XJ2IColMzDrRw7ZOJhe9FDupF0RAEnAugtbXxJZ4M4IzyouMAjlIUKcFXOPPv%2FAKJaQB62GaYYbkbYmdDge8CRFpPe%2BPXhItZ1ed1DNlR6uyiZh7KYZ%2FFoJpOmE8YQ%3D%3D
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/upload`
      const form = new FormData()
      form.append('file-to-upload', this.file)
      this.$http.post(url, form)
        .then((res) => {
          console.log(res)
          this.imageUrl = res.data.imageUrl
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  mounted () {
  }
}
</script>
