<template>
   
</template>


<script>
    export default {
        data(){
            return {
                formLabelWidth: '120px',
            }
        },
        props: ['dialogFormVisible', 'form'],

        methods: {
            updateForm: function (formName) {
                let itemId = formName.id;
                let phone = formName.phone;
                let zone = formName.zone;
                this.$axios.put('http://127.0.0.1:8000/api/persons/detail/' + itemId, {
                    phone: phone,
                    zone: zone
                })
                    .then(function (response) {
                        console.log(response);
                        this.form = response.data;

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                location.reload();
            },
            canclemodal: function () {
                this.$emit('canclemodal');
            }
        }

    }

</script>