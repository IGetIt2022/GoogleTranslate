<template>
<h2 class="flex justify-center text-bold">Google Tranlsate</h2>
  <div class="container gap-8 sm:columns-2 mx-auto lg:w-4/5">
    <div class="auto-cols-auto m-0">
      <div class="flex justify-start rounded-md border-black m-0">
        <span class="text-slate-400 text-sm flex items-center pr-1">Translate from:</span>
        <select v-model="postData.source"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ma-1 focus:outline-none block w-1/4 p-1">
          <template v-for="option in langs" :key="option.name">
            <option class="text-black" :value="option.code">{{ option.name }}</option>
          </template>
        </select>
      </div>
      <div class="border-gray mt-2">
        <textarea id="postData.q" v-model="postData.q" rows="8"
          class="rounded-lg shadow-md block p-2 focus:outline-none w-full text-sm text-gray-800 bg-white border-0"
          placeholder="Enter text..."></textarea>
      </div>
    </div>
    <div class="auto-cols-auto m-0">
      <div class="flex justify-start rounded-md border-black m-0">
        <span class="text-slate-400 text-sm flex items-center pr-1">Translate into:</span>
        <select v-model="postData.target"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ma-1 focus:outline-none block w-1/4 p-1">
          <template v-for="option in langs" :key="option.name">
            <option class="text-black" :value="option.code">{{ option.name }}</option>
          </template>
        </select>
      </div>
      <div class="border-gray mt-2">
        <textarea v-model="translatedText" rows="8"
          class="rounded-lg shadow-md block p-2 focus:outline-none w-full text-sm text-gray-800 bg-white border-0"
          placeholder="Translation" readonly></textarea>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <input value="Translate" type="submit" v-on:click="translateText"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      langs: [],
      confidence: null,
      settings: {},
      translatedText: "",
      postData: {
        q: "",
        source: "en",
        target: "fa",
        format: "text",
        api_key: ""
      },
    }
  },
  methods: {
    async translateText() {
      const res = await fetch("https://lt.vern.cc/translate", {
        method: "POST",
        body: JSON.stringify({
          q: this.postData.q,
          source: this.postData.source,
          target: this.postData.target,
          format: "text",
          api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
      })
      const content = await res.json()
      this.translatedText = content.translatedText
      if(this.postData.q === ''){
        if(this.postData.source === 'fa'){
          alert("لطفا قسمت ورودی را پر کنید")
        }else{
          alert("please fill the input text")
        }
      }
    }
  },
  async mounted() {
    let result = await axios.get('https://lt.vern.cc/languages')
    this.langs = result.data
    let settings = await axios.get('https://lt.vern.cc/frontend/settings')
    this.settings = settings.data
    let detect = await axios.post('https://lt.vern.cc/detect', {
      confidence: this.confidence,
      language: this.postData.q
    })
    console.log(detect)
  },
})
</script>

<style>
div {
  margin: 24px auto
}
</style>
