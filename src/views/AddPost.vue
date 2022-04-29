<template>
    <v-container>
        <v-row class="mx-auto">
            <v-col sm="30" class="mx-auto">
                <v-card>
                    <v-card-title>Thêm Bài Đăng mới</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="px-3" enctype="multipart/form-data">
                        <v-text-field label="Tên quán " v-model="post.name" prepend-icon="mdi-coffee" :rules="rules"></v-text-field>

                        <v-text-field label="Không gian quán" v-model="post.space" prepend-icon="mdi-spa-outline" :rules="rules"></v-text-field>

                       <v-text-field label="Giờ mở cửa" v-model="post.open" prepend-icon="mdi-timer" :rules="rules"></v-text-field>

                        <v-text-field label="Địa chỉ" v-model="post.location" prepend-icon="mdi-map-marker" :rules="rules"></v-text-field>

                        <v-textarea label="Review về quán" v-model="post.review" prepend-icon="mdi-note-multiple" :rules="rules"></v-textarea>

                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Chọn hình ảnh 1"></v-file-input>

                        <v-btn
                            class="mr-4"
                            type="submit"
                            :disabled="invalid"
                        >
                            submit
                        </v-btn>
                        <v-btn @click="clear">
                            clear
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";
export default {
    data(){
        
        return{
            rules: [(value) => !!value || "Nội dung này không được để trống!"],
           
            post:{
                name:"",
                space:"",
                open:"",
                location:"",
                review:"",
                image:"",
            },
            image: "",
        };
    },
    methods: {
        selectFile(file){
            this.image = file[0];
        },
        async submitForm(){
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("name", this.post.name);
            formData.append("space", this.post.space);
            formData.append("open", this.post.open);
            formData.append("location", this.post.location);
            formData.append("review", this.post.review);
            if(this.$refs.form.validate()){ 
                const response = await API.addPost(formData);
                this.$router.push({ name:"home", params: {message: response.message } });
            }
        },
        clear () {
        this.post.name = ''
        this.post.space = ''
        this.post.open = ''
        this.post.location = ''
        this.post.review = ''
        this.$refs.observer.reset()
      },
    },
};
</script>
