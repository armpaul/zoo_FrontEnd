<template>
    <div id="events" class="container">
        <h3 >
            舉辦活動
        </h3>
        <div v-for="(item, index) in result.slice(0,3)" id="list-example" class="list-group">
            <a v-bind:href="item.Source" class="list-group-item list-group-item-action" >{{item.title}}</a>
        </div>       
    </div>
</template>
    
<script setup>
const result = ref([]); // 儲存api資料
import { ref,onMounted } from 'vue';

   onMounted(()=>{makeRequest();
   })
    async function makeRequest() {
        try{
            fetch('http://localhost:5134/zoo-events')
            .then(response=>{
                if(!response.ok){
                    throw new Error(`HTTP error status!${response.status}`)
                }
                return response.json();
            })
            .then(data=>{
                console.log('ZOO-EVENTS DATA:', JSON.parse(data.data));
               
                result.value = JSON.parse(data.data);
                console.log("z00-events result");
                console.log(result.value);
              
            })

        }
        catch(error){
            console.log(e);
        }
    }
</script>
    
    
<style lang="scss" scoped>
   
   @import '@/assets/styles/main.scss';
    
    #events{
        width: 45%;
        height: 30%;
        float: left;
        margin: 1%;
        h3{
            padding: 0.25em;
            color: $themeColor4;
            background-color: $themeColor2;   
        }
       
    }   
    
</style>
    