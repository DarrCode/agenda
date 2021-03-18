<template>
  <div class="container-fluid" id="app">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-5">
        <!--SearchContacts v-on:query-change="searchContact"/-->
      </div>      
    </div>
    
    <div class="row justify-content-around">
      <div class="col-sm-12 col-md-5">
        <ContactAdd v-on:add-contact="addContact"/>
      </div>
      <div class="col-sm-12 col-md-7">
        <ContactsList :ContactsList="contacts" v-on:delete-contact="deleteContact"/>
      </div>
    </div>
  </div>
</template>

<script>
import contactos from "./assets/data.json"


//import SearchContacts from './components/SearchContacts'
import ContactAdd from './components/ContactAdd'
import ContactsList from './components/ContactsList'

export default {
  components: {
    ContactAdd, ContactsList
  },
  data() {
    return {
      contacts: []
    }
  },
  methods: {
    addContact (contact){
      this.contacts.push(contact[0].contact)
      this.contacts = contactos
    },
    deleteContact(id){
      contactos = contactos.filters(contact => contact.id != id)
      this.contacts = contactos
    },
   /* searchContact(query){
      if (query.trim() === '') {
        this.contacts = contactos
      }else{
        const temp = contactos.filter(contact => {
          return contact.name.includes(query)
        });
        
        let data = [... temp]
         this.contacts = data
        console.log(this.contacts);
        
      }
    }*/
  },
  created() {
    this.contacts = contactos
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.form [type="text"] {
	width: 100%;
	box-sizing: border-box;
	padding: 15px 20px;
	background: #f5f5f5;
	border: 1px solid transparent;
	color: rgb(68, 68, 68);
	border-radius: 50px;
	margin-bottom: 50px;
	font-size: 1rem;
	position: relative;
	z-index: 99;
}

.form [type="text"]:focus {
	background: #fcfcfc;
	border: 1px solid #ddd;
}
</style>
