<template>
    <div>
        <b-navbar style="background-color: #34495E;" class="d-flex justify-content-center">
            <b-navbar-nav class="w-50 d-flex justify-content-around">
                <div class="nav-item-box"><b-nav-item class="col" to="/"><p>Home</p></b-nav-item></div>
                <div class="nav-item-box"><b-nav-item class="col" to="/projects"><p>Projects</p></b-nav-item></div>
                <div class="nav-item-box"><b-nav-item class="col" to="/courses"><p>Courses</p></b-nav-item></div>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>
.nav-item-box {
    font-size: 1.15em;
    text-align: center;
}
p:hover{
    text-decoration: underline;
}
p {
    color: var(--white);
    margin: 0px;
    padding: 0px;
}
</style>