const Navbar = (): React.JSX.Element =>
    <nav className="bg-white shadow-lg fixed w-screen top-0 z-10 px-3">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between">
        <div className="inline-flex justify-center md:p-4 mb-1 mt-1 md:mt-0 md:mb-0">
          <a>
            <span className="font-semibold md:text-lg text-blue-700">Mucha</span>
          </a>
          <Icon name="uil:square" className="flex items-center rotate-45 text-gray-500 mr-1 ml-1 md:mr-2 md:ml-2 mt-1" />
          <span className="md:text-lg text-gray-500 font-semibold">Software Engineering</span>
        </div>
        <div className="flex space-x-7">
          <div className="hidden md:flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-1">
              <a
                :href="linkedIn" target="_blank"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              ><Icon size="1.5rem" name="skill-icons:linkedin" /></a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                :href="github" target="_blank"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                <Icon size="1.5rem" name="mdi:github" />
              </a>
            </div>
            <a
              :href="cv"
              target="_blank" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              @click="open_cv"
            >
              <Icon size="1.5rem" name="academicons:cv-square" />
            </a>
          </div>
          <!-- <div className="hidden md:flex items-center">
            <button @click="switch_language" @scroll.prevent>
              <span :className="flag" />
            </button>
          </div> -->
        </div>
        <!-- Mobile menu button -->
        <!--         <div className="md:hidden flex items-center">
          <button className="mobile-menu-button focus:outline-none">
            <i className="bx bx-menu text-3xl mt-1" />
          </button>
        </div>
       <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" @click="show_mobile_menu">
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-blue-500 " x-show="!showMenu" fill="none"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :className="[isActive ? 'active' : 'hidden']" className="mobile-menu">
      <ul>
        <li>
          <a className="block text-sm px-2 py-4" @click="switch_language" @scroll.prevent><span :className="flag" /></a>
        </li>
      </ul>
    </div> -->
      </div>
    </div>
  </nav>

export default Navbar