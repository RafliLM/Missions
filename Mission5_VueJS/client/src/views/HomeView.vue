<template>
  <v-container>
    <div v-if="personalDatas.length != 0">
      <div  v-for="(item, index) in personalDatas" v-bind:key="index">
       <v-card 
        style="
        text-align:center; 
        max-width: 50%;
        padding: 5px;
        margin: 1vh auto;
        " 
      variant="outlined"
      >
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.nim }}</v-card-subtitle>
        <v-card-text>{{ item.email }}</v-card-text>
        
        <v-btn variant="outlined" :to="'/edit/'+item._id">Edit Personal Data</v-btn>
        <v-btn variant="outlined" @click="remove(item._id)">Delete Personal Data</v-btn>
      </v-card>
      </div>
    </div>
    <div v-else >
      <v-card 
      style="
        text-align:center; 
        max-width: 20%;
        padding: 5px;
        margin: auto;
        " 
      variant="outlined"
      >
        <v-card-title>No Data Found</v-card-title>
        <v-btn variant="outlined" to="/create">Create Personal Data</v-btn>
      </v-card>
    </div>
  </v-container>
</template>
  
<script>
export default {
  name: 'HomeView',

  data: () => ({
    personalDatas : []
  }),
  methods: {
    remove(id){
      this.axios.delete("http://localhost:3000/api/" + id)
        .then(() => {
          window.location.reload()
        })

    },
    getData(){
      this.axios
      .get('http://localhost:3000/api')
      .then(response => {
        this.personalDatas = response.data
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>
  