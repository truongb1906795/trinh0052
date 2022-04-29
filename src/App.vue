<template>
<v-app id="inspire">
    
      <v-row style="height: 150px;">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="./assets/image.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"

    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          size="90"
        ><img
          src="./assets/logo.jpg"
          
        >
        </v-avatar>

        <v-btn
          href="/"
          text       
        >
          Home
        </v-btn>

        <v-btn
          href="/add-post"
          text       
        >
          Thêm mới
        </v-btn>

        <v-btn
          href="/about"
          text       
        >
          Thông tin về chúng tôi
        </v-btn>

        <v-spacer></v-spacer>
        
        <v-responsive max-width="400">
          <v-row>
        <v-col
          cols="2"
          sm="9"
        >
          <v-text-field
            label="Tìm kiếm..."
            placeholder="Nhập từ khóa tìm kiếm"
            filled
            rounded
            dense
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="2"
          sm="3">
          <v-btn 
          fab
          dark
          color="grey"
        >
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
        </v-col>
        </v-row>
        
        </v-responsive> 
        
      </v-container>
    </v-app-bar>
    </v-row>

    <v-row >
    <v-container>
    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <v-col sm="12">
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    </v-container>
    </v-row>
    <v-row style="height: 120px;">

    </v-row>
  </v-app>
</template>

<!-- <template>
  <div>
      <v-row
      style="height: 300px;"
       >
        <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="./assets/image.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"

    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          size="90"
        ><img
          src="./assets/logo.jpg"
          
        >
        </v-avatar>

        <v-btn
          href="/"
          text       
        >
          Home
        </v-btn>

        <v-btn
          href="/add-post"
          text       
        >
          Thêm mới
        </v-btn>

        <v-btn
          href="/about"
          text       
        >
          Thông tin về chúng tôi
        </v-btn>

        <v-spacer></v-spacer>
        
        <v-responsive max-width="400">
          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            rounded
            dense
          ></v-text-field>
        </v-responsive> 
        <v-btn v
          fab
          dark
          color="grey"
        >
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    </v-row>

      <v-row>
        <v-container>
        <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    </v-container>
      </v-row>
      <v-row
        style="height: 150px;"
      >
        
      </v-row>

  </div>
</template> -->

<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }

</script>