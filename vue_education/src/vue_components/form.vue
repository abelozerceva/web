<template lang="pug">
    .callback-form
        .title Send Us Message
        form(action="" method="method")
            .name
                label(class="label-name" for="name") Full Name #[br]
                input(type="text" id="name" class="form-name" :class="{'is-invalid': $v.name.$error}" placeholder="Your Name" @blur="$v.name.$touch()" v-model="name")
                .invalid-feedback(v-if="!$v.name.required && $v.name.$error") Name field is required
            .email
                label(class="label-email" for="email") Email #[br]
                input(type="email" id="email" class="form-email" :class="{'is-invalid': $v.email.$error}" placeholder="Your Email" @blur="$v.email.$touch()" v-model="email")
                .invalid-feedback(v-if="!$v.email.required && $v.email.$error") Email field is required
                .invalid-feedback(v-if="!$v.email.email") This field should be an email

            .msg
                label(class="label-mgs" for="msg") Message #[br]
                textarea(placeholder='Your Message' v-model="msg")
        button.btn.btn-submit(type='submit') Submit

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name: '',
            email: '',
            msg: '',
        }
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email
        },
    }
    
}
</script>

<style lang="scss" scoped>
@mixin textStyle() {
    color: #1F3F68;
    font-size: 16px;
    letter-spacing: 0.04em;
}

@mixin boxStyle() {
    padding: 21px 36px;
    border: 1px solid #356EAD;
    border-radius: 10px;
    box-sizing: border-box;
    width: 100%;
}

.callback-form {
    background: #FFFFFF;
    box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
    padding: 56px;
    border-radius: 10px;
    width: 100%;
    max-width: 426px;

    .title {
        @include textStyle;
        margin-bottom: 16px;
        text-transform: uppercase;
    }

    form {
        white-space: pre;

        div {
            margin-top: 32px;
        }

        label {
            @include textStyle;
            line-height: 30px;
            opacity: 0.8;
        }

        input, textarea {
            @include textStyle;
            @include boxStyle;
            margin-top: 8px;
        }

        textarea {
            height: 100px;
        }

        .is-invalid {
            border-color: rgb(185, 0, 0);
        }
        .invalid-feedback {
            color:rgb(185, 0, 0);
            font-size: 12px;
            margin-left: 10px;
            margin-top: 0;
            position: absolute;
        }
    }

    .btn-submit {
        @include textStyle;
        @include boxStyle;
        margin-top: 72px;
        background: #5A98D0;
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        text-align: center;
        color: white;
        text-transform: uppercase;
    }
}
    
</style>