<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MoonRabbit from './components/MoonRabbit.vue'
import NavDropdownCard from './components/navBar/NavDropdownCard.vue';
import { ref } from 'vue';

import learnIcon from '@/assets/nav-icons/learn-icon.svg'
import zhongqiuIcon from '@/assets/nav-icons/zhongqiu-icon.svg'
import chuseokIcon from '@/assets/nav-icons/chuseok-icon.svg'
import tsukimiIcon from '@/assets/nav-icons/tsukimi-icon.svg'
import tetIcon from '@/assets/nav-icons/tet-icon.svg'
import toukIcon from '@/assets/nav-icons/touk-icon.svg'
import luangIcon from '@/assets/nav-icons/luang-icon.svg'
import thadingyutIcon from '@/assets/nav-icons/thadingyut-icon.svg'

const learnMoreDropdownOpen = ref(false);
const visitorDropdownOpen = ref(false);
const joinDropdownOpen = ref(false);

function toggleLearnMoreDropdown() {
  learnMoreDropdownOpen.value = !learnMoreDropdownOpen.value;
  visitorDropdownOpen.value = false; 
  joinDropdownOpen.value = false;
}
function toggleVisitorDropdown() {
  visitorDropdownOpen.value = !visitorDropdownOpen.value;
  learnMoreDropdownOpen.value = false;
  joinDropdownOpen.value = false;
}
function toggleJoinDropdown() {
  joinDropdownOpen.value = !joinDropdownOpen.value;
  learnMoreDropdownOpen.value = false;
  visitorDropdownOpen.value = false;
}
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header__content">

        <RouterLink to="/" class="logo-container">
          <p>AMF</p>
          <img src="./assets/amf-logo.png" alt="Autumn Moon" class="logo" />
        </RouterLink>

        <nav class="nav">
          <RouterLink to="/" class="nav__link">HOME</RouterLink>
          <RouterLink to="/donate" class="nav__link">DONATIONS</RouterLink>
          <div class="nav__dropdown">
            <button class="nav__link" @click="toggleLearnMoreDropdown">LEARN ABOUT AMF <span class="nav__dropdown-arrow" :class="{'open': learnMoreDropdownOpen}"></span></button>
            <div class="nav__dropdown-content" v-if="learnMoreDropdownOpen">
              <NavDropdownCard :img="learnIcon" title="History of AMF" subtext="Explore AMF across culture and see history in San Diego." to="/learn-more"/>
              <NavDropdownCard :img="zhongqiuIcon" title="Mid-Autumn Moon Festival" subtext="The Mid-Autumn Festival (中秋节, Zhōngqiū Jié) is celebrated on the 15th day of the eighth lunar month. Families gather to enjoy the harvest, light lanterns, and admire the full moon."  to="/zhongqiu-jie"/>
              <NavDropdownCard :img="chuseokIcon" title="Chuseok" subtext="The Korean festival of Chuseok, “autumn eve”, is celebrated during the eighth month of the lunar calendar. It is a time for families to gather and give thanks to their ancestors." to="/chuseok"/>
              <NavDropdownCard :img="tsukimiIcon" title="Tsukimi" subtext="Tsukimi, a Japanese festival over 1000 years old, is celebrated in the eighth lunar month. Families honor the moon and harvest with tea ceremonies, food, and moon-viewing events." to="/tsukimi"/>
              <NavDropdownCard :img="tetIcon" title="Tết Trung Thu" subtext="In Vietnam, the Mid-Autumn Festival, or Tết Trung Thu, is celebrated on the 15th day of the eighth lunar month. It is a time for family reunions, with a special focus on children across the nation." to="/tet-trung"/>
              <NavDropdownCard :img="toukIcon" title="Bon Om Touk" subtext="Bon Om Touk, or the Water and Moon Festival, is Cambodia’s largest holiday. Celebrated over three days from late October to early November, it marks the end of the monsoon season." to="/boun-om-touk"/>
              <NavDropdownCard :img="luangIcon" title="Bon That Luang" subtext="The That Luang Festival in Vientiane, Laos, is held at the Pha That Luang temple. Lasting three to seven days during the twelfth lunar month, it is the nation’s most important religious celebration." to="/boun-that-luang"/>
              <NavDropdownCard :img="thadingyutIcon" title="Thadingyut" subtext="Thadingyut, the Festival of Lights in Myanmar, is a three-day celebration marking the end of Buddhist Lent. Homes and streets glow with lights and candles to welcome Buddha back to Earth." to="/thadingyut" />
            </div>
          </div>
          <div class="nav__dropdown">
            <button class="nav__link" @click="toggleVisitorDropdown">VISITOR INFO <span class="nav__dropdown-arrow" :class="{'open': visitorDropdownOpen}"></span></button>
            <div class="nav__dropdown-content" v-if="visitorDropdownOpen">
              <NavDropdownCard title="Visitor Info" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/visitor-info" />
              <NavDropdownCard title="Schedule" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/schedule" />
              <NavDropdownCard title="Vendors/Non-Profits" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/vendors" />
            </div>
          </div>
          <div class="nav__dropdown">
            <button class="nav__link" @click="toggleJoinDropdown">JOIN THE FESTIVAL <span class="nav__dropdown-arrow" :class="{'open': joinDropdownOpen}"></span></button>
            <div class="nav__dropdown-content" v-if="joinDropdownOpen">
              <NavDropdownCard title="Volunteers" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/volunteers" />
              <NavDropdownCard title="Sponsors" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/sponsors" />
              <NavDropdownCard title="Vendors/Non-Profits" subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit." to="/vendors" />
            </div>
          </div>
          
        </nav>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>

     <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="AMF-col">
              <div class="logo-container">
                <p>AMF</p>
                <img src="./assets/amf-logo.png" alt="Autumn Moon" class="logo" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur<br></br> adipiscing elit. Sem placerat in id cursus<br></br>mi pretium tellus.</p>
              <div class="socials">
                <a href="https://www.instagram.com/" ><img src="@/assets/vectors/instagram-icon.svg" alt="instagram-icon" style="width: 1.5rem; height: 1.5rem;"/></a>
                <a href="https://www.facebook.com/" ><img src="@/assets/vectors/facebook-icon.svg" alt="facebook-icon" style="width: 1.5rem; height: 1.5rem;"/></a>
                <a href="https://x.com/" ><img src="@/assets/vectors/x-icon.svg" alt="x-icon" style="width: 1.5rem; height: 1.5rem;"/></a>
              </div>
            </div>
            <div class="gen-col">
              <p class="col-header">Navigation</p>
              <RouterLink to="/" class="footer__link">Home</RouterLink>
              <RouterLink to="/learn-more" class="footer__link">Learn About AMF</RouterLink>
              <RouterLink to="/schedule" class="footer__link">Schedule</RouterLink>
              <RouterLink to="/vendors" class="footer__link">Vendor Info</RouterLink>
              <RouterLink to="/visitor-info" class="footer__link">Visitor Info</RouterLink>
            </div>
            <div class="gen-col">
              <p class="col-header">More Links</p>
              <RouterLink to="/donate" class="footer__link">Donate</RouterLink>
              <RouterLink to="/volunteers" class="footer__link">Volunteer</RouterLink>
              <RouterLink to="/sponsors" class="footer__link">Sponsors</RouterLink>
              <RouterLink to="/contact-us" class="footer__link">Contact Us</RouterLink>
            </div>
            <div class="contact-col">
              <p class="col-header">Get In Touch</p>
              <div>
                <img src="@/assets/vectors/pin-icon.svg" alt="pin-icon" style="width: 0.688rem; height: 1rem;"/>
                <p> 1234 Address St, <br></br>San Diego, CA 92101</p>
              </div>
              <div>
                <img src="@/assets/vectors/phone-icon.svg" alt="phone-icon" style="width: 0.688rem; height: 1rem;"/>
                <p>123-456-7890</p>
              </div>
              <div>
                <img src="@/assets/vectors/mail-icon.svg" alt="mail-icon" style="width: 0.813rem; height: 0.625rem;"/>
                <p>amf@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="footer-tagline">
            <div class="tagline-links">
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#terms-of-service">Terms of Service</a>
              <a href="#cookie-settings">Cookie Settings</a>
            </div>
            <p>© 2025 Alan Team 1 Mwahahaha. All rights reserved.</p>
          </div>
        </div>
      </footer>
  </div>
</template>

<style scoped>
:root {
  background-color: white;
}

.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.header {
  background-color: #111111;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__content {
  width: 100vw;
  margin: 0 auto;
  padding: 17px 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-container:hover {
  background-color: transparent;
}

.logo-container p {
  color: #F5E8D8;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
}
.logo {
  height: 43px;
  width: auto;
  margin: 0 ;
}

.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
}

.nav__link {
  display: inline-block;
  padding: 0 16px;
  text-decoration: none;
  color: #F5E8D8;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.nav__link:hover,
.nav__link.router-link-active,
.nav__link.router-link-exact-active {
  color: #C11010;
  transition: color 1s;
}

.nav__dropdown {
  position: static;
  display: inline-block;
}

.nav__dropdown-content {
  display: flex;
  flex-direction: row;
  position: absolute;
  flex-wrap: wrap;
  top: 100%;
  left: 0;
  right: 0;
  width: 100vw;
  background: #111111;
  box-shadow:#000000 0px 2px 4px -1px;
  border-radius: 0;
  padding: 61.44px 64px;
  justify-content: center;
  align-items: center;
  gap: 22px;
}

.nav__dropdown-arrow::after {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;

  vertical-align: middle;

  -webkit-mask: url("@/assets/vectors/nav-arrow.svg") no-repeat center;
  mask: url("@/assets/vectors/nav-arrow.svg") no-repeat center;

  -webkit-mask-size: contain;
  mask-size: contain;

  background: #F5E8D8;
  transition: transform 0.3s;
}

.nav__dropdown-arrow.open::after {
  transform: rotate(180deg); /* flip on click */
  background: #C11010;
}

.main {
  flex: 1;
  padding: 0;
  background-color: #111111;
}

.footer {
  background-color: #111111;
  color: #F5E8D8;
}

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 64px;
  gap: 80px;
}

.footer-content {
  display: flex;
  gap: 80px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.AMF-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;
}

.socials {
  display: flex;
  gap: 6px;
}

.socials a{
  padding: 0; 
  background: transparent;
}

.gen-col {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

.contact-col div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.col-header {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.25rem;
}

.footer__link {
  color: #F5E8D8;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 0.938rem;
  background: transparent;
  padding: 0;
}

.footer-tagline {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #F5E8D8;
  padding-top: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #F5E8D8;
  flex-wrap: wrap;
  gap: 10px;
}

.tagline-links {
  display: flex;
  gap: 24px;
}

.tagline-links a {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: #F5E8D8;
  text-decoration: underline;
  background: transparent;
  padding: 0;
}

@media (max-width: 768px) {
  .header__content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .nav__link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
