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
            <span><i class="pi pi-book" style="font-size: 1em"></i> Experience</span>
            <Divider />
        </div>
        <div class="content">
            <div class="sub-header text-left">
                <span>Techno Brave Asia Ltd. | Frontend Developer - Intern </span>
            </div>
            <div class="row">
                <div class="col col-md-12 col-lg-3 profile-image">
                    <img src="../../src/assets/img/technobrave.png" class="img-fluid  mx-auto d-block" alt="Avatar" style="width:200px">
                </div>
                <div class="col col-md-12 col-lg-9">
                    <div class="row">
                        <div class="col col-12 context">
                            <ul>
                                <li>June 2019 - August 2019</li>
                                <li>Php</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="sub-header text-left">
                <span>Kookmin University, South Korea | Java Developer - Intern </span>
            </div>
            <div class="row">
                <div class="col col-md-12 col-lg-3 profile-image">
                    <img src="../../src/assets/img/kookmin.png" class="img-fluid  mx-auto d-block" alt="Avatar" style="width:200px">
                </div>
                <div class="col col-md-12 col-lg-9">
                    <div class="row">
                        <div class="col col-12 context">
                            <ul>
                                <li>September 2019 - December 2019</li>
                                <li>Java with openGL</li>
                                <li>Blender and Gimp (3d model)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="sub-header text-left">
                <span>Tangerine Co.,Ltd. | Junior Frontend Developer - Employee </span>
            </div>
            <div class="row">
                <div class="col col-md-12 col-lg-3 profile-image">
                    <img src="../../src/assets/img/tangerine.png" class="img-fluid  mx-auto d-block" alt="Avatar" style="width:200px">
                </div>
                <div class="col col-md-12 col-lg-9">
                    <div class="row">
                        <div class="col col-12 context">
                            <ul>
                                <li>July 2020 - July 2022</li>
                                <li>HTML, CSS, Javascript, Typescript, Jquery</li>
                                <li>Angular, React</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="sub-header text-left">
                <span>INNOVATIVE SOFTWARE CONSULTING CO., LTD. | Frontend Developer - Employee </span>
            </div>
            <div class="row">
                <div class="col col-md-12 col-lg-3 profile-image">
                    <img src="../../src/assets/img/isc.png" class="img-fluid  mx-auto d-block" alt="Avatar" style="width:200px">
                </div>
                <div class="col col-md-12 col-lg-9">
                    <div class="row">
                        <div class="col col-12 context">
                            <ul>
                                <li>July 2022 - Now</li>
                                <li>HTML, CSS, Javascript, Jquery</li>
                                <li>Vue</li>
                            </ul>
                        </div>
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
.message{
    font-size: 20px;
}
.header{
    font-size: 40px;
    margin:  20px 0 0 0;
}
.sub-header{
    font-size: 30px;
    margin:  20px 0 20px 0;
}
.content{
    margin: 0 20px;
}
.context{
    font-size: 20px;
}
</style>
