<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const errorMsg = ref("");


function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = ()=>{
  if (newNote.value.length < 9) {
    return errorMsg.value = "Something wrong";
  }
  notes.value.push({
    id:Math.floor(Math.random()*1000000),
    text:newNote.value,
    date:new Date(),
    backgroundColor: getRandomColor()
  })
  showModal.value=false;
  newNote.value = "";
  errorMsg.value = "";
}
</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <button class="add" @click="addNote">Add Note</button>
        <button class="close" @click="showModal=false">x</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal=true">+</button>
      </header>  
      <div class="card-container">
        <div
            class="card"
            v-bind:style="{backgroundColor:note.backgroundColor}"
            v-bind:key="note.id" 
            v-for="note in notes"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString('en-US') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100vw;
}

.container{
  max-width: 1000px;
  padding: 10px;
  margin:0 auto;
}

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100px ;
  color: white;
  font-size: 20px;
}

.card{
  width: 225px;
  height: 225px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date{
  font-size: 12.5px;
  font-weight: bold;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal{
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal .add{
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close{
  border: none;
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 100%;
  position: absolute;
  top: -15px;
  right: -15px;
  color: white;
  cursor: pointer;
}

.modal p{
  color: red;
}
</style>