<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const age = ref()

function getAge(){
    age.value = new Date()
    return age.value.getFullYear() - 1998
}
</script>

<template>
    <div class="profile-card  mx-auto">
        <div class="header text-center">
            <span><i class="pi pi-file" style="font-size: 1em"></i>Personal Information</span>
            <Divider />
        </div>
            <div class="row content text-center">
                <div class="col col-12 ">
                    <div class="row">
                        <div class="col col-lg-3 col-sm-6 col-12 ">
                            <p><b>Name</b> :</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p>Worawat Chueajedton</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p><b>Nick Name</b> :</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p>Aomsin</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p><b>Birthday</b> :</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p>12 January 1998</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p><b>Age</b> :</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p>{{getAge()}}</p>
                        </div>
                        <div class="col col-lg-3 col-sm-6 col-12">
                            <p><b>Education</b> :</p>
                        </div>
                        <div class="col col-lg-9 col-sm-6 col-12">
                            <p>Bachelor degree in department of Software engineer, Engineering faculty, KASETSART University</p>
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

.header{
    font-size: 40px;
    margin:  20px 0 20px 0;
}
.content{
    margin: 0 20px;
    font-size: 20px;
}
</style>
