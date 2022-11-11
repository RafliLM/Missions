<template>
    <v-container>
      <v-form style="width: 25%; margin: auto;">
        <v-card variant="outlined">
          <v-card-title>
            Create Personal Data
          </v-card-title>
          <v-text-field
            v-model="name"
            label="Name"
            :counter="24"
            :rules="nameRules"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="nim"
            label="NIM"
            :counter="9"
            :rules="nimRules"
            @keypress="isNumber($event)"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="emailRules"
            required
          >
          </v-text-field>
          <v-btn
            @click="submit"
            block
          >
          Create
          </v-btn>
        </v-card>
      </v-form>
    </v-container>
  </template>
  
  <script>
import QueryString from 'qs';

  
  export default {
    name: 'CreateView',
  
    data: () => ({
      name: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length < 24) || 'Name must be less than 24 characters'
      ],
      nim: "",
      nimRules: [
        v => !!v || 'NIM is required',
        v => (v && v.length == 9) || 'NIM must be 9 characters long'
      ],
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        v => (v && v.length < 32) || 'E-mail must be less than 32 characters'
      ]
    }),
    methods:{
      submit(){
        this.axios.post('http://localhost:3000/api', QueryString.stringify({
          name : this.name,
          nim : this.nim,
          email : this.email
        }))
        .then(() => {
          
        })
        .catch(() => {
          
        })
        .finally(() => {
          this.$router.push("/")
        })
      },
      isNumber (evt){
        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const keyPressed = evt.key;
        
        if (!keysAllowed.includes(keyPressed)) {
            evt.preventDefault()
        }
      }
    }
  }
  </script>
  