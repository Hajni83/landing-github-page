<template>
<div class="section home subpage-long">
<b-container>
    <b-row class="home-row mb-0">
        <b-colxx xxs="12" lg="6" xl="4" md="12">
            <div class="home-text">
                <div class="display-1">{{ $t('lp.register.title') }}</div>
                <p class="white mb-5">{{ $t('lp.register.detail-1') }}
                    <router-link tag="a" to="/auth-login"  class="white-underline-link">{{ $t('lp.register.login') }}</router-link>.
                </p>
                <b-form class="dark-background" @submit.prevent="formSubmit">
                    <label class="form-group has-top-label">
                        <input type="text" class="form-control" v-model="name">
                        <span>{{ $t('lp.login.name') }}</span>
                    </label>
                    <label class="form-group has-top-label">
                        <input type="email" class="form-control" v-model="email">
                        <span>{{ $t('lp.login.email') }}</span>
                    </label>
                    <label class="form-group has-top-label">
                        <input type="password" class="form-control" v-model="password">
                        <span>{{ $t('lp.login.password') }}</span>
                    </label>
                    <b-button variant="empty" class="btn-outline-semi-light mt-4" size="xl">{{ $t('lp.register.buttonlabel') }}</b-button>
                </b-form>
            </div>
        </b-colxx>
    </b-row>
</b-container>
</div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        formSubmit(){
            console.log("register :",name,email,password)
        },onResizeLandingPage() {
            var rowOffestHome = document.querySelector(".home-row").offsetLeft;
            document.querySelector(".landing-page .section.home").style.backgroundPositionX=rowOffestHome - 580 + "px";
        }
    },
    mounted(){
        this.onResizeLandingPage();
        window.addEventListener("resize", this.onResizeLandingPage);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.onResizeLandingPage);
    }
}
</script>

