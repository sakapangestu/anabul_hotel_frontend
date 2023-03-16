<!--<template>-->
<!--  <div class="dropzone-wrapper">-->
<!--    <div-->
<!--      class="dropzone-container"-->
<!--      @dragover="dragover"-->
<!--      @dragleave="dragleave"-->
<!--      @drop="drop"-->
<!--    >-->
<!--      <input-->
<!--        type="file"-->
<!--        :multiple="multiple"-->
<!--        name="file"-->
<!--        id="fileInput"-->
<!--        class="hidden-input"-->
<!--        @change="onChange"-->
<!--        ref="file"-->
<!--        accept=".jpg,.jpeg,.png"-->
<!--      />-->
<!--&lt;!&ndash;      <img&ndash;&gt;-->
<!--&lt;!&ndash;        v-if="src.length !== 0 && !getFiles.length && src[0] != null"&ndash;&gt;-->
<!--&lt;!&ndash;        :src="src"&ndash;&gt;-->
<!--&lt;!&ndash;        alt="img"&ndash;&gt;-->
<!--&lt;!&ndash;        class="cur-img"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--      <label for="fileInput" class="file-label" v-if="!getFiles.length">-->
<!--        <div v-if="isDragging">Release to drop files here.</div>-->
<!--        <div v-else>Drop files or <u>click here</u> to upload.</div>-->
<!--      </label>-->
<!--      <div class="preview-container" v-else>-->
<!--        <div v-for="file in getFiles" :key="file.name" class="preview-card">-->
<!--          <div>-->
<!--            <img class="preview-img" :src="generateURL(file)" />-->
<!--            <p class="text-black">-->
<!--              {{ file.name }} - -->
<!--              {{ Math.round(file.size / 1000) + "kb" }}-->
<!--            </p>-->
<!--          </div>-->
<!--          <div>-->
<!--            <div class="pointer" @click="remove(getFiles.indexOf(file))">-->
<!--              &#10005;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapGetters } from "vuex";-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isDragging: false-->
<!--    };-->
<!--  },-->
<!--  props: {-->
<!--    src: {-->
<!--      type: Array-->
<!--    },-->
<!--    multiple: {-->
<!--      type: Boolean,-->
<!--      default: false-->
<!--    },-->
<!--    accept: {-->
<!--      type: String-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapGetters(["getFiles"])-->
<!--  },-->
<!--  methods: {-->
<!--    onChange() {-->
<!--      this.$store.commit("addFiles", [...this.$refs.file.files]);-->
<!--      this.$emit("dz-success", this.getFiles);-->
<!--    },-->
<!--    dragover(e) {-->
<!--      e.preventDefault();-->
<!--      this.isDragging = true;-->
<!--    },-->
<!--    dragleave() {-->
<!--      this.isDragging = false;-->
<!--    },-->
<!--    drop(e) {-->
<!--      e.preventDefault();-->
<!--      this.$refs.file.files = e.dataTransfer.files;-->
<!--      this.onChange();-->
<!--      this.isDragging = false;-->
<!--    },-->
<!--    remove(i) {-->
<!--      this.$store.commit("removeFile", i);-->
<!--    },-->
<!--    generateURL(file) {-->
<!--      let fileSrc = URL.createObjectURL(file);-->
<!--      setTimeout(() => {-->
<!--        URL.revokeObjectURL(fileSrc);-->
<!--      }, 1000);-->
<!--      return fileSrc;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--.dropzone-wrapper {-->
<!--  display: flex;-->
<!--  flex-grow: 1;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  text-align: center;-->
<!--}-->

<!--.dropzone-container {-->
<!--  width: 100%;-->
<!--  border-radius: 6px;-->
<!--  padding: 1.8rem;-->
<!--  background: #f4f4f4;-->
<!--  border: 1px solid #c4c4c4;-->
<!--}-->

<!--.hidden-input {-->
<!--  opacity: 0;-->
<!--  overflow: hidden;-->
<!--  position: absolute;-->
<!--  width: 1px;-->
<!--  height: 1px;-->
<!--}-->

<!--.file-label {-->
<!--  font-size: 14px;-->
<!--  display: block;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.preview-container {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  flex-wrap: wrap;-->
<!--}-->

<!--.preview-card {-->
<!--  display: flex;-->
<!--  /* border: 1px solid #a2a2a2; */-->
<!--  border-radius: 8px;-->
<!--  padding: 5px;-->
<!--  margin-left: 5px;-->
<!--}-->

<!--.cur-img {-->
<!--  border-radius: 8px;-->
<!--  margin-bottom: 1em;-->
<!--}-->

<!--.preview-img {-->
<!--  /* width: 100px; */-->
<!--  height: 100px;-->
<!--  border-radius: 8px;-->
<!--  background-color: #a2a2a2;-->
<!--}-->
<!--</style>-->
