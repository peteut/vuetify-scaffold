<template>
    <v-app>
        <v-main>
            <v-container>
                <template v-if="name">
                    <div class="text-h1">
                        Hello, {{ name }}
                    </div>
                    <div class="text-body-1">
                        Welcome to vuetify-scaffold!
                    </div>
                </template>
                <v-text-field
                        label="Enter your name"
                        v-model.trim="name">
                </v-text-field>
                <pre>
{{ $data }}
                </pre>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => {
        return { name: "" }
    }
}
</script>

<style lang="sass">
</style>
