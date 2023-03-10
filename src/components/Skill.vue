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
            <span><i class="pi pi-th-large" style="font-size: 1em"></i> Skill</span>
            <Divider />
        </div>
        <div class="language-content mt-0">
            <div class="sub-header text-left mt-0">
                <span>Language</span>
            </div>
            <div class="row container-fluid">
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/html.png" class="img-fluid " alt="Responsive image">
                    <p class="">Html</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/css.png" class="img-fluid " alt="Responsive image">
                    <p class="">Css</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/js.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Javascript</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/ts.png" class="img-fluid  " alt="Responsive image">
                    <p class="">TYpescript</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/java.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Java</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/python.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Python</p>
                </div>
            </div>
        </div>
        <div class="framework-content">
            <div class="sub-header text-left">
                <span>Frontend Framework</span>
            </div>
            <div class="row container-fluid">
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/angular.png" class="img-fluid " alt="Responsive image">
                    <p class="">Angular</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/vue.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Vue</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/react.png" class="img-fluid  " alt="Responsive image">
                    <p class="">React</p>
                </div>
            </div>
        </div>
        <div class="versionControl-content">
            <div class="sub-header text-left">
                <span>Versin Control</span>
            </div>
            <div class="row container-fluid">
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/github.png" class="img-fluid " alt="Responsive image">
                    <p class="">Github</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/gitlab.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Git Lab</p>
                </div>
                <div class="col col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <img src="../../src/assets/img/bitbucket.png" class="img-fluid  " alt="Responsive image">
                    <p class="">Bitbucket</p>
                </div>
            </div>
        </div>
        <div class="devtool-content">
            <div class="sub-header text-left">
                <span>Dev tool</span>
            </div>
            <div class="row container-fluid">
                <div class="col col-12 text-center">
                    <img src="../../src/assets/img/vscode.png" class="img-fluid " alt="Responsive image">
                    <p class="">Vs Code</p>
                </div>
            </div>
        </div>
        
        
    </div>
</template>
<style scoped>
.img-fluid{
    max-width: 100%;
    height: auto;
    margin:  15px 0 ;
    width: 80px;
}
.header{
    font-size: 40px;
    margin:  20px 0 0 0;
}
.message{
    font-size: 20px;
}
.sub-header{
    font-size: 30px;
    margin:  20px 0 20px 0;
}
.language-content,.framework-content,.devtool-content,.versionControl-content{
    margin: 0 50px;
}
/* .profile-image{
} */
</style>
