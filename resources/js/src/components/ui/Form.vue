<template>
    <form
        @submit.prevent="this.handlerSubmit"
        class="d-flex flex-column gap-2 w-25 mx-auto"
    >
        <label v-if="iName">Name:</label>
        <input
            v-if="iName"
            v-model="iName"
            @input="this.handlerInput('name', iName)"
            type="text"
        />
        <label v-if="iEmail">Email:</label>
        <input
            v-if="iEmail"
            v-model="iEmail"
            @input="this.handlerInput('email', iEmail)"
            type="email"
        />
        <label v-if="iPassword">Password: </label>
        <input type="password"
            v-if="iPassword"
            v-model="iPassword"
            @input="this.handlerInput('password', iPassword)"
        />
        <button v-if="btnText" type="submit" class="mt-4">{{ btnText }}</button>
    </form>
</template>

<script>
export default {
    name: "Form",
    props: ['fields', 'btn'],
    components: {},
    setup() {
        return {};
    },
    data() {
      return {
          iName: this.fields && this.fields.name ? this.fields.name : '',
          iEmail: this.fields && this.fields.email ? this.fields.email : '',
          iPassword: this.fields && this.fields.password ? this.fields.password : '',
          btnText: this.btn ? this.btn : 'Отправить'
      }
    },
    methods: {
        handlerInput(key, value) {
          this.$emit('updateFields', {key, value})
        },
        handlerSubmit() {
            this.$emit('handlerSubmit');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
