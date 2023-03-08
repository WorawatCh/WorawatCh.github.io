<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>

<template>
    <div class="profile-card  mx-auto">
        <div class="header text-center">
            <span><i class="pi pi-user" style="font-size: 1em"></i> About Me</span>
            <Divider />
        </div>
            <div class="row">
                <div class="col col-md-12 col-lg-3 profile-image">
                    <img src="../../src/assets/img/profile.jpeg" class="img-fluid rounded-circle mx-auto d-block" alt="Avatar" style="width:200px">
                </div>
                <div class="col col-md-12 col-lg-9">
                    <p class="message text-center">
                        I am frontend software developer.
                        Who has pleasant personality,
                        eager to learns and highly
                        adaptive flexible.
                        Seeking for exploring new thing
                        and the place to improving
                        myself
                    </p>
                </div>
            </div>
    </div>
</template>
<style scoped>
.img-fluid{
    max-width: 100%;
    height: auto;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    margin:  15px 0 15px 0;
    border-radius: 50%;
}
.profile-card{
    margin: 15px;
    border: 2px solid #4CBB17;
    border-radius: 10px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) ;
    max-width: 1200px;
}
.header{
    font-size: 40px;
    margin:  20px 0 20px 0;
}
.message{
    font-size: 20px;
}
/* .profile-image{
} */
</style>
