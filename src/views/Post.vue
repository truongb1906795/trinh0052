<template>
    <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card>
                    <v-img :src="`/${post.image}`"></v-img>
                </v-card>

                <v-row class="mt-1 mx-1">
                     <v-col sm="12" class="d-flex justify-end">
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="grey"
                            text
                        >
                            <span>Yêu thích </span>

                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn
                            color="grey"
                            text
                        >
                            <span>Không thích </span>

                            <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-row>
                        <div>                       
                            <h1>{{ post.name }}</h1>
                            <p>Không gian quán: {{post.space}}</p>
                            <p>Giờ mở cửa: {{post.open}}</p>   
                            <p>Địa chỉ: {{post.location}}</p>   
                            <p>{{post.review}}</p>   
                        </div>
                    </v-row>
                </v-row>
                    <v-row 
                    align="center"
                    justify="space-around">
                        <v-col sm="6" > 

                            <v-btn color="success" tile text :to="{ name: 'edit-post', params: { id: post._id}}"> <v-icon left>mdi-pencil</v-icon>Cập nhật</v-btn>
                        </v-col> 
                        <v-col sm="6"> 
                            <v-btn color="red" text @click="removePost(post._id)"><v-icon left>mdi-delete</v-icon> Xóa bài đăng</v-btn>
                        </v-col> 
                    </v-row>
            </v-col>
    </v-row>
</template>

<script>
import API from "../api";
export default {
    data() {
        return {
            post: {},
        };
    },
    async created(){
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async removePost(id){
            const response = await API.deletePost(id);
            this.$router.push({ name: "home", params: {message: response.message }});
        },
    },
};
</script>