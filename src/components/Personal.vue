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
            <span><i class="pi pi-file" style="font-size: 1em"></i>Personal Information</span>
            <Divider />
        </div>
            <div class="row content text-center">
                <div class="col col-6">
                    <div class="row">
                        <div class="col col-4">
                            <p>Name :</p>
                        </div>
                        <div class="col col-8">
                            <p>Worawat Chueajedton</p>
                        </div>
                    </div>
                </div>
                <div class="col col-6">
                    <div class="row">
                        <div class="col col-4">
                            <p>Nick Name :</p>
                        </div>
                        <div class="col col-8">
                            <p>Aomsin</p>
                        </div>
                    </div>
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
.content{
    margin: 0 20px;
    font-size: 20px;
}
/* .profile-image{
} */
</style>
