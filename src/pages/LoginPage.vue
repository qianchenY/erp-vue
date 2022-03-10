<template>
    <div class="g-login">
        <div class="m-loginform">
            <p class="box-title">
                ERP管理系统
            </p>
            <el-form class="box-form" ref="formRef" :model="form" label-width="90px" :rules="rules">
                <el-form-item label="用户名：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="pw">
                    <el-input v-model="form.pw" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click="onSubmit(formRef)">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
    import { reactive, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'
    import { getCurrentInstance } from 'vue'

    const { proxy } = getCurrentInstance()

    const store = useStore();
    const router = useRouter();

    let form = reactive({
        name: '',
        pw: '',
    });

    const formRef = ref();

    const rules = reactive({
        name: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
            }
        ],
        pw: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
            },
            {
                min: 8,
                max: 13,
                message: '密码过短',
                trigger: 'blur'
            }
        ],
    })
    
    let onSubmit = (formel) => {
        if (!formel) return

        formel.validate((valid) => {

            if (valid) {

                console.log('submit');
                store.commit('toggleLoginStatus', false);
                router.push("/");
            } else {
                proxy.axios.get('/api/pc', {
                    name: form.name
                }).then(function(res){
                    console.log(res);
                })
                console.log('error submit!')
                return false
            }
        })
    }
</script>
<style scoped lang="scss">
    .g-login{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #cfcfcf;
        background-image: url('../assets/images/login-bg.jpeg');
    }

    .m-loginform{
        width: 100%;
        max-width: 600px;
        padding: 50px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 10px;

        .box-title{
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
        }
    }
</style>