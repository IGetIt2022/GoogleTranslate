<!-- <script lang="ts">
import { ref } from 'vue'
import axios from 'axios'

export default {
//     async setup() {
//         const translate =ref()
     
// //         const TranslateService = await fetch("https://lt.vern.cc/translate", {
// // 	method: "POST",
// // 	body: JSON.stringify({
// // 		q: "hi",
// // 		source: "en",
// // 		target: "fa",
// // 		format: "text",
// // 		api_key: ""
// // 	}),
// // 	headers: { "Content-Type": "application/json" }
// // });
//    const textTranslate = () => {
//             translate.value = Response
//             console.log(translate.value)
//         }
//         return{
//             translate,
//             // TranslateService,
//             textTranslate,

//         }
//     }
data() {
    return{
        translate :'',
        description : ''
    }
},
methods: {
    
}

}
</script>
<template>
    <div>
        <input type="text" v-model="translate" >
        <input type="submit" value="Submit" v-on:click="textTranslate">
    </div>
</template> -->

<template>
  <!-- <section>
    <form @submit.prevent="setPost">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.q">
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.target">
      </div>
      <div>
        <label for="body">Body: </label>
        <textarea id="body" rows="6" cols="22" v-model="postData.format"></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section> -->
  <div class="gap-8 columns-2 container mx-auto lg:w-4/5">
    <div class="auto-cols-auto m-0">
         <div class="flex justify-start rounded-md border-black m-0">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ma-1 focus:outline-none block w-1/4 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div class="border-gray mt-2">
           <textarea v-model="textToTranslate" rows="8" class="rounded-lg shadow-md block p-2 focus:outline-none w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Enter text..." required></textarea>
          </div>
      </div>
    <div class="auto-cols-auto m-0">
         <div class="flex justify-start rounded-md border-black m-0">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ma-1 focus:outline-none block w-1/4 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div class="border-gray mt-2">
           <textarea v-model="textTranslated" rows="8" class="rounded-lg shadow-md block p-2 focus:outline-none w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Translation" readonly></textarea>
          </div>
    </div>
    </div>
    <div class="flex justify-center">
      <input value="Translate" type="submit" v-on:click="setPost" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
    </div>
</template>

<script lang="ts">
export default {
  data() {
    
    return {
      postData: {
        q: "",
		source: "en",
		target: "fa",
		format: "text",
		api_key: ""
      }
    }
  },
  methods: {
    setPost() {
      fetch('https://lt.vern.cc/translate',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: "",
            source: "en",
            target: "fa",
            format: "text",
            api_key: ""
        })
      })
        .then(response => console.log(response.json()))
        .then(data => console.log(data))

    }
  }
}
</script>

<style>
html,body{margin:0;padding:0}
section{height:100vh;display:grid;justify-items:center;padding-top:40px}
div{margin:24px auto}
label{font-weight:bolder;display:block;margin-bottom:4px}
</style>
