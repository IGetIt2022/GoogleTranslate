<script  lang="ts">
import {  ref, VueElement } from 'vue';
import { defineComponent } from 'vue'
import {translateServive} from '../services/translate.servive'

export default defineComponent ({
    props: {
    
  },
  components: {
    translateServive,
  },
  data() {
    return {
      
    }
  },
   setup(props) {
    const textToTranslate =ref()
    const category = ref([])
    const outPutText = ref()

    const changeText = async () => {
          // console.log(textToTranslate.value);
          //  textToTranslate.value = fetch('translateServive.json').then(await translateServive.json())
          // console.log("textToTranslate.value");
          // console.log(textToTranslate.value);
          // outPutText.value = (await translateServive.json())
          // console.log("outPutText.value")
          // console.log(outPutText.value)
          // console.log(await translateServive.json())
          const res = await fetch("translateServive.json");
          const data = await res.clone().json();
          console.log(data)

    }
    return{
      textToTranslate,
      category,
      outPutText,
      changeText
    }
  
  }
  // name: "translate",
//   setup() {

// const translateSubmit = () => {
//   alert("submit")
// }
// return {
//   textToTranslate,
//   category,
//   translateSubmit
// }
//   }

})


</script>

<template>
{{ category }}
{{ textToTranslate }}
    <div class="gap-8 columns-2 container mx-auto px-4 lg:w-4/5 bg-indigo-50 p-2 mt-4">
      <div class="auto-cols-auto">
         <div class="flex justify-start py-2">
            <select >
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div>
            <textarea name="Input" v-model="textToTranslate"  placeholder="Enter text ... " class="w-full max-h-screen p-3"></textarea>
          </div>
      </div>
      <div class="auto-cols-auto">
         <div class="flex justify-start py-2">
            <select>
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div>
            <textarea name="Output" placeholder="Translation" v-model="outPutText" class="w-full max-h-screen p-3 bg-white" disabled></textarea>
          </div>
      </div>
    </div>
    <div class="py-3">
      <input value="Translate" type="submit" v-on:click="changeText">
    </div>
    <translate-api></translate-api>
</template>


<style scoped>

</style>
