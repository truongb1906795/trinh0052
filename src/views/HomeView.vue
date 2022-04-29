<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row   no-gutters>
      <v-col sm="12" class="pa-1" v-for="post in posts" :key="post._id">
        <v-card :to="{ name: 'post', params: {id: post._id }}">
          <v-row>
            <v-col sm="5">
          <v-img height="300" width="400" margin="auto" :src="`/${post.image}`"></v-img>
            </v-col>
          <v-col sm="7">
            <v-card-title class="headline">
              <h2>{{post.name}} </h2>
            </v-card-title>
            <v-card-text class="py-0">
              <p>Không gian quán: {{post.space}}</p>
            </v-card-text>
            <v-card-text class="py-0">
              <p>Giờ mở cửa: {{post.open}}</p>   
            </v-card-text>
            <v-card-text class="py-0">
              <p>Địa chỉ: {{post.location}}</p>   
            </v-card-text>
            <v-card-text class="py-0">
              <p>{{post.review.substring(0,200)+" ..."}}</p>   
            </v-card-text>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
          >
            Xem thêm
          </v-btn>
          
          </v-col>
          
          </v-row>
          <v-col sm="12" ><p> </p></v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
p{
  
}
</style>
<script>
  import API from "../api";

  export default {
    name: 'Home',
    data(){
      return {
        posts: [],
      };
    },
    async created(){
      this.posts = await API.getAllPost();
    },
  }
</script>
