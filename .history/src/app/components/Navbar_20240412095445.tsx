const Navbar = (): React.JSX.Element =>
    <nav class="bg-white shadow-lg fixed w-screen top-0 z-10 px-3">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between">
        <div class="inline-flex justify-center md:p-4 mb-1 mt-1 md:mt-0 md:mb-0">
          <!-- Website Logo -->
          <a>
            <span class="font-semibold md:text-lg text-blue-700">Mucha</span>
          </a>
          <Icon name="uil:square" class="flex items-center rotate-45 text-gray-500 mr-1 ml-1 md:mr-2 md:ml-2 mt-1" />
          <span class="md:text-lg text-gray-500 font-semibold">Software Engineering</span>
        </div>
        <div class="flex space-x-7">
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <div class="hidden md:flex items-center space-x-1">
              <a
                :href="linkedIn" target="_blank"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              ><Icon size="1.5rem" name="skill-icons:linkedin" /></a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a
                :href="github" target="_blank"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                <Icon size="1.5rem" name="mdi:github" />
              </a>
            </div>
            <a
              :href="cv"
              target="_blank" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              @click="open_cv"
            >
              <Icon size="1.5rem" name="academicons:cv-square" />
            </a>
          </div>
          <!-- <div class="hidden md:flex items-center">
            <button @click="switch_language" @scroll.prevent>
              <span :class="flag" />
            </button>
          </div> -->
        </div>
        <!-- Mobile menu button -->
        <!--         <div class="md:hidden flex items-center">
          <button class="mobile-menu-button focus:outline-none">
            <i class="bx bx-menu text-3xl mt-1" />
          </button>
        </div>
       <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button" @click="show_mobile_menu">
            <svg
              class=" w-6 h-6 text-gray-500 hover:text-blue-500 " x-show="!showMenu" fill="none"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[isActive ? 'active' : 'hidden']" class="mobile-menu">
      <ul>
        <li>
          <a class="block text-sm px-2 py-4" @click="switch_language" @scroll.prevent><span :class="flag" /></a>
        </li>
      </ul>
    </div> -->
      </div>
    </div>
  </nav>

export default Navbar