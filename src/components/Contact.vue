<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

const toast = useToast();

function handleClick(name){
    if(name == 'Resume'){
        window.open("https://drive.google.com/file/d/1u1Ktu29dtN-zBzzrdtnRDfw0RnTLnyWn/view?usp=sharing");
    } else if(name == 'Github'){
        window.open("https://github.com/WorawatCh");
    }else if(name == 'Facebook'){
        window.open("https://www.facebook.com/rockey.cruzer/");
    }else if(name == 'Instagram'){
        window.open("https://www.instagram.com/it_7a.m/");
    }
}

function onCopyToClipboard(name){
    var copyText = document.getElementById(name);
    navigator.clipboard.writeText(copyText.textContent || copyText.innerText);
    toast.add({severity:'success', summary: 'Copied', life: 3000});
}
</script>

<template>
    <div class="profile-card  mx-auto">
        <Toast />
        <div class="header text-center">
            <span><i class="pi pi-info-circle" style="font-size: 1em"></i> Contact</span>
            <Divider />
        </div>
            <div class="row content text-center">
                <div class="col col-12 ">
                    <div class="row">
                        <div class="col col-12 col-md-6 btn">
                            <Button label="082-3998576" id="tel" class="p-button-outlined p-button-success p-button-lg font" @click="onCopyToClipboard('tel')"/>
                        </div>
                        <div class="col col-12 col-md-6 btn">
                            <Button label="worawat.chu@ku.th" id="email" class="p-button-outlined p-button-success p-button-lg font"  @click="onCopyToClipboard('email')"/>
                        </div>
                        <div class="col col-md-3 col-12 col-sm-6 btn">
                            <div class="template">
                                <Button class="contact p-0 p-button-lg" aria-label="Resume" @click="handleClick('Resume')">
                                    <i class="pi pi-file-pdf px-2"></i>
                                    <span class="px-3">Resume</span>
                                </Button>
                            </div>
                        </div>
                        <div class="col col-md-3 col-12 col-sm-6 btn">
                            <div class="template">
                                <Button class="contact p-0 p-button-lg" aria-label="Github"  @click="handleClick('Github')">
                                    <i class="pi pi-github px-2"></i>
                                    <span class="px-3">Github</span>
                                </Button>
                            </div>
                        </div>
                        <div class="col col-12 col-md-3 col-sm-6 btn">
                            <div class="template">
                                <Button class="contact p-0 p-button-lg" aria-label="Facebook"  @click="handleClick('Facebook')">
                                    <i class="pi pi-facebook px-2"></i>
                                    <span class="px-3">Facebook</span>
                                </Button>
                            </div>
                        </div>
                        <div class="col col-12 col-md-3 col-sm-6 btn">
                            <div class="template">
                                <Button class="contact p-0 p-button-lg" aria-label="Instagram"  @click="handleClick('Instagram')">
                                    <i class="pi pi-instagram px-2"></i>
                                    <span class="px-3">Instagram</span>
                                </Button>
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
.content{
    margin: 0 20px;
    font-size: 20px;
}
.btn{
    margin: 10px 0;
}
.font{
    font-family: "Static", Helvetica, Arial;
}
.template .p-button i {
    line-height: 2.25rem;
}
.template .p-button.contact {
    background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--green-300);
    font-family: "Static", Helvetica, Arial;
}
.template .p-button.contact:hover {
    background-position: left bottom;
}
.template .p-button.contact i {
    background-color: var(--green-300);
}
.template .p-button.contact:focus {
    box-shadow: 0 0 0 1px var(--green-400);
}
</style>
