<template>
    <div>
        <footer class="fixed-bottom d-flex justify-content-center">
            <div class="w-50 d-flex my-3">
                <img src="../assets/jag.jpg" alt="Profile picture" class="img-thumbnail">
                <div class="w-75 d-flex flex-column ml-4">
                    <div>
                        <h3>Albin Alvarsson</h3>
                        <p>
                            I'm currently a student at Linköping University studying under the 
                            'Innovative Programming' programme. This portfolio contains many of 
                            the more major projects I've developed during my time at the university 
                            and also some projects I've developed in my own spare time. 
                        </p>
                    </div>

                    <div class="container d-flex flex-row w-75 m-0">                        
                        <div class="col-3 social-btn">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/alalse"><img class="img-fluid img-thumbnail social-icon" src="../assets/twitter.png" alt="Twitter"></a>
                        </div>
                        <div class="col-3 social-btn">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alalse"><img class="img-fluid img-thumbnail social-icon" src="../assets/github.png" alt="GitHub"></a>
                        </div>

                        <div class="col-6 p-0">
                            <p class="m-0"><u>Email</u>: albin.alvarsson@gmail.com</p>
                            <p class="m-0"><u>Phone</u>: +46767938204</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

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