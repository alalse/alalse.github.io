<template>
    <div>
        <footer class="fixed-bottom d-flex justify-content-center">
            <div class="w-50 d-flex my-3">
                <img src="../assets/jag.jpg" alt="Profile picture" class="img-thumbnail">
                <div class="w-75 d-flex flex-column ml-4">
                    <div>
                        <h3>About Me</h3>
                        <p>
                            I'm currently a student at Linköping University studying under the 
                            'Innovative Programming' programme. This portfolio contains many of 
                            the more major projects I've developed during my time at the university 
                            and also some projects I've developed in my own spare time. 
                        </p>
                    </div>

                    <div class="container d-flex flex-row w-75 m-0">
                        <div class="col-4">
                            <div class=" social-btn" @click="do_copy" style="position: relative;">
                                <img id="button" class="img-fluid img-thumbnail social-icon" src="../assets/mail.png" alt="Mail" @click="email_clicked = true" @mouseleave="email_clicked = false">
                            </div>
                            <div v-if="email_clicked" style="background-color: white; font-size: 0.7em; position: absolute; border-radius: 3px;">Email copied to clipboard</div>
                        </div>
                        
                        <div class="col-4 social-btn">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/alalse"><img class="img-fluid img-thumbnail social-icon" src="../assets/twitter.png" alt="Twitter"></a>
                        </div>
                        <div class="col-4 social-btn">
                            <a target="_blank" rel="noopener noreferrer" href="https://gitlab.liu.se/albal273"><img class="img-fluid img-thumbnail social-icon" src="../assets/gitlab.png" alt="GitLab"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: 'albin.alvarsson@gmail.com',
            email_clicked: false
        }
    },
    methods: {
        do_copy() {
            this.$copyText(this.email)
        }
    }
}
</script>

<style scoped>
footer{
    background-color: #34495E;
}
h3, p {
    color: var(--white);
}
.social-icon {
    width: 55px;
    height: 55px;
    background-color: var(--white);
}
</style>