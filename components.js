/**
 * components.js — Shared header, footer, and behaviors for the WXPN redesign.
 * Include via <script src="components.js"></script> (root) or
 * <script src="../components.js"></script> (subdirectory).
 */

/* ── 1. Path detection ── */
var BASE = location.pathname.includes('/music-news/') ||
           location.pathname.includes('/business-support/') ||
           location.pathname.includes('/concert-calendar/') ? '../' : '';

/* ── 2. Shared SVG constants ── */
var HAMBURGER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
var CHEVRON_DOWN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

var WXPN_LOGO_SVG = '<svg viewBox="0 0 196 62" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF" fill-rule="evenodd"><path d="M138.902234,21.2979581 C138.902234,21.0187442 138.913866,20.7395303 138.900489,20.4608993 C138.774281,17.8372213 138.445676,15.2607591 137.052157,12.9518525 C135.200916,9.88574581 131.063397,9.04285793 128.258329,11.1838864 C126.704287,12.3701083 125.951112,14.0716226 125.492228,15.9077892 C124.603539,19.465289 124.580857,23.0571805 125.250863,26.6467404 C125.600406,28.5184644 126.237261,30.2969229 127.634269,31.6772538 C130.471326,34.4787193 135.406222,33.6200929 137.375528,29.9862318 C138.850471,27.2663737 138.990637,24.297613 138.902234,21.2979581 L138.902234,21.2979581 Z M137.758804,0.000174873004 C138.099041,0.28638369 138.536406,0.224012319 138.927824,0.316695011 C144.453628,1.62824254 148.115979,5.08140147 150.247551,10.2553108 C151.877201,14.2086065 152.259314,18.3700011 152.12729,22.5978474 C151.998756,26.7405889 151.253723,30.7457636 149.327456,34.4629808 C145.861106,41.153039 139.272133,44.0081322 132.432489,42.6027362 C129.764679,42.053635 127.488287,40.7712329 125.478851,38.9653777 C125.33345,38.8342229 125.215967,38.5526774 124.987397,38.6686765 C124.773949,38.7765149 124.905973,39.0510655 124.905973,39.2457574 C124.896667,46.2861446 124.88678,53.3259488 124.910044,60.366336 C124.91237,61.0460091 124.71986,61.215053 124.05567,61.2109726 C120.125201,61.1847416 116.194732,61.1975657 112.263682,61.222668 C111.759433,61.2255453 111.653581,61.0576673 111.654163,60.5825956 C111.66405,40.9542667 111.663468,21.3253548 111.650091,1.69702593 C111.650091,1.14559305 111.752453,0.933413806 112.367789,0.938659996 C116.089462,0.969554227 119.811136,0.968971317 123.532228,0.939242906 C124.135931,0.933996716 124.284821,1.12111083 124.258068,1.68711646 C124.215611,2.58712952 124.246436,3.49064004 124.246436,4.37491453 C124.515718,4.48216997 124.599468,4.28398057 124.701249,4.19188079 C127.18818,1.93835067 130.083979,0.573175417 133.411907,0.134244176 C133.524157,0.119088516 133.646293,0.123168886 133.710851,0.000174873004 L137.758804,0.000174873004 Z"/><path d="M19.7668617,24.6345933 C20.331016,23.0543242 20.6183276,21.5241854 21.0161436,20.0272725 C21.6780071,17.5359151 22.2817104,15.0288192 22.9255442,12.5327985 C23.8654136,8.88902798 24.8297104,5.25166948 25.7521318,1.6032357 C25.8725234,1.12816404 26.0446777,0.957371408 26.5367134,0.960285958 C29.9559537,0.978356168 33.3751941,0.976607438 36.7944344,0.959678021 C37.2556451,0.957371408 37.4376866,1.11767166 37.5487727,1.562432 C38.7468736,6.36502761 39.964749,11.1617941 41.1808795,15.9591435 C41.8776392,18.7052326 42.5807964,21.449573 43.2839537,24.1933304 C43.3118706,24.3023346 43.3706125,24.4037609 43.4851881,24.6724824 C43.8294967,23.4955871 44.1249507,22.4650022 44.4314552,21.4379148 C45.455657,18.0074893 46.4943988,14.5811443 47.5075501,11.1478043 C48.3369151,8.33934383 49.1389448,5.52388846 49.9502801,2.71076473 C50.066019,2.31030555 50.1666362,1.905766 50.2742326,1.50297518 C50.3684522,1.15089753 50.5522386,0.959120138 50.9616866,0.960285958 C54.8229448,0.972527068 58.684203,0.971361248 62.5454611,0.963200508 C63.0223751,0.962034688 63.1607964,1.09610399 63.007835,1.58516549 C61.7015561,5.75588665 60.4098172,9.93185399 59.121568,14.1084042 C58.0531644,17.5720556 57.0033721,21.040953 55.9308973,24.5028556 C54.5001555,29.1195029 53.0537104,33.731487 51.6171525,38.3469685 C51.3059953,39.3466591 50.9901852,40.345184 50.708108,41.3524525 C50.5836451,41.796047 50.3882267,41.9913219 49.8892119,41.9884073 C46.0744819,41.9685884 42.2597519,41.9779149 38.445022,41.9831611 C38.1030398,41.9831611 37.8093306,41.977332 37.6953365,41.550059 C36.8147905,38.2496225 35.9191228,34.9532664 35.0315976,31.6539957 C33.9690101,27.7041974 32.9104938,23.7526504 31.8490694,19.8022693 C31.8252237,19.7154157 31.786838,19.6320595 31.701924,19.4006443 C31.4454374,20.2487783 31.2098884,20.9628431 31.0133068,21.6874003 C29.9018647,25.7916697 28.798565,29.8988536 27.6946837,34.0060376 C27.0560843,36.3819788 26.4081792,38.7550055 25.7957519,41.1379416 C25.6404641,41.7424193 25.4049151,42.0053117 24.7157163,41.9984526 C20.9242504,41.958096 17.1327846,41.9703371 13.3413187,41.9895731 C12.8440487,41.9919048 12.5962861,41.8537551 12.4439062,41.3594474 C10.2425412,34.2257947 8.0272178,27.0962223 5.80607834,19.9683986 C4.68474896,16.3712609 3.53841068,12.782284 2.41417329,9.18631208 C1.62319407,6.6553168 0.860131751,4.11616078 0.0627548961,1.58808004 C-0.0890433234,1.10776219 0.0249507418,0.962617598 0.515823145,0.963783418 C4.37708131,0.974275798 8.23833947,0.974275798 12.0995976,0.962617598 C12.5084641,0.961451778 12.726565,1.07745087 12.8487015,1.49598026 C13.7589092,4.61688048 14.6888914,7.7319516 15.6177104,10.8470227 C16.9460902,15.3039527 18.2785412,19.7602997 19.6104107,24.2160639 C19.640654,24.3180731 19.6848558,24.416002 19.7668617,24.6345933" opacity="0.746117001"/><path d="M170.413799,5.79476675 C171.615972,4.45057625 172.734974,3.33896685 174.081384,2.4803404 C177.249954,0.461140112 180.730262,-0.0424941401 184.388541,0.3614625 C186.813823,0.629601107 189.043687,1.43751439 190.996126,2.93559312 C193.77793,5.07079251 195.065598,7.99175459 195.409325,11.4064415 C195.563449,12.9389119 195.584969,14.4754627 195.584969,16.0137622 C195.583224,24.4047519 195.577408,32.7963244 195.597201,41.1873141 C195.598927,41.8057816 195.481443,42.0156292 194.809111,42.0093592 C190.925752,41.9730768 187.04123,41.978323 183.157871,42.0063027 C182.557657,42.0098001 182.373289,41.8833087 182.375615,41.246188 C182.400043,34.5100799 182.414001,27.7733888 182.370963,21.0372807 C182.359912,19.3450929 182.388411,17.6307546 181.933598,15.9682952 C181.123426,13.0071124 178.592292,11.4554059 175.578428,12.0732905 C172.537811,12.6958384 170.990749,14.5180151 170.719722,17.8475971 C170.632482,18.9149054 170.583627,19.9880427 170.581882,21.0588484 C170.57025,27.7949565 170.568506,34.5316476 170.589443,41.2677557 C170.59177,41.842505 170.458001,42.0098001 169.86942,42.0063027 C165.915687,41.978323 161.961954,41.9812375 158.008221,42.0004736 C157.493503,42.0028052 157.343449,41.8786454 157.344029,41.3417853 C157.361479,28.1487829 157.363224,14.9557805 157.346357,1.76277817 C157.345776,1.14431065 157.473147,0.933297224 158.13501,0.938543414 C161.995687,0.971769285 165.856363,0.964191455 169.71704,0.943789604 C170.24688,0.940875054 170.448114,1.0539596 170.427758,1.63162342 C170.382393,2.95074878 170.413799,4.27162288 170.413799,5.79476675"/><path d="M106.018668,0.951892054 C105.428923,1.84316147 104.938633,2.59744702 104.435547,3.34298893 C100.751677,8.79902667 97.0689709,14.2562302 93.371143,19.7023585 C93.0983715,20.1039835 93.0721994,20.3884436 93.3531134,20.8046413 C95.4858493,23.9686769 97.5924131,27.1507827 99.7082825,30.3258935 C102.185909,34.0431107 104.664698,37.7597449 107.139998,41.477545 C107.22433,41.6040365 107.40579,41.7241159 107.291214,41.9019035 C107.187689,42.0627866 106.994597,41.9875913 106.840472,41.9881742 C102.397612,41.9910887 97.9547513,41.9852596 93.5118908,42.0015811 C93.1204724,42.0033298 92.9355228,41.8342859 92.7412677,41.5410822 C90.609695,38.3199214 88.4664902,35.1075044 86.3285199,31.890424 C85.863238,31.1903491 85.8754516,31.1920978 85.420057,31.8764341 C83.2797602,35.0911829 81.1295763,38.2989367 78.9991668,41.5212632 C78.7665258,41.8739238 78.5193448,42.0004153 78.0976831,41.9986665 C73.6548226,41.9840938 69.211962,41.9916716 64.7691015,41.9875913 C64.595784,41.9870083 64.3654694,42.0936809 64.2555466,41.9036522 C64.1357365,41.6949704 64.3805911,41.5760568 64.4748107,41.4349926 C67.6800214,36.6364773 70.8927929,31.8432083 74.103238,27.0487734 C75.5008285,24.9613726 76.8844605,22.8646453 78.3029887,20.7924002 C78.5885555,20.3744537 78.5484249,20.0981544 78.2785614,19.6953636 C74.2503834,13.6861442 70.2390718,7.66526669 66.2306682,1.64322333 C66.1091134,1.4607725 65.8281994,1.2806533 65.9503359,1.05273549 C66.0718908,0.825983491 66.3731608,0.961801524 66.5935881,0.961218614 C70.8974457,0.955389514 75.2007217,0.966464804 79.503416,0.941399673 C80.0815288,0.938485123 80.4159501,1.10986067 80.7346682,1.6065 C82.3933982,4.18704263 84.0974932,6.73843977 85.8562588,9.4064189 C86.5309175,8.40439659 87.1602113,7.4734893 87.7854338,6.54083327 C88.9393329,4.82066582 90.0967217,3.1022471 91.2360807,1.37333599 C91.4041638,1.11918723 91.55887,0.947811684 91.8868938,0.947811684 C96.5373864,0.953640784 101.188461,0.951892054 106.018668,0.951892054"/></g></svg>';

/* ── 3. Header injection ── */
function injectHeader() {
  var target = document.querySelector('header.site-header') || document.getElementById('site-header');
  if (!target) return;

  var html =
    '<div class="header-row1">' +
      '<div class="container header-row1__inner">' +

        '<a href="' + BASE + '" class="header-logo">' + WXPN_LOGO_SVG + '</a>' +

        '<div class="header-album-wrap">' +
          '<div class="header-album-art">' +
            '<img src="https://i.scdn.co/image/ab67616d00001e02305780793d5f230df33937b6" alt="Dove Ellis - Blizzard album art">' +
          '</div>' +
          '<button class="header-play-btn" aria-label="Play live stream">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 3 20 12 6 21 6 3"/></svg>' +
          '</button>' +
        '</div>' +

        '<div class="header-np-info">' +
          '<span class="header-np-info__label">Now Playing</span>' +
          '<span class="header-np-info__show">WXPN Middays with Mike Vasilikos</span>' +
          '<span class="header-np-info__track"><strong>Dove Ellis</strong> <span>&mdash; Little Left Hope</span></span>' +
        '</div>' +

        '<div class="header-row1__right">' +
          '<button class="header-search-btn" aria-label="Search">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
          '</button>' +
          '<a href="https://xpn.org/support/" class="nav-donate">Donate</a>' +
          '<button class="header-menu-btn header-menu-btn--row1" aria-label="Open menu" aria-expanded="false" aria-controls="header-drawer">' +
            HAMBURGER_SVG +
          '</button>' +
        '</div>' +

      '</div>' +
    '</div>' +

    '<div class="header-row2">' +
      '<div class="container header-row2__inner">' +

        '<button class="header-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="header-drawer">' +
          HAMBURGER_SVG +
        '</button>' +

        '<a href="' + BASE + '" class="header-logo header-logo--nav" aria-hidden="true" tabindex="-1">' + WXPN_LOGO_SVG + '</a>' +

        '<nav class="header-nav" aria-label="Primary navigation">' +
          '<a href="' + BASE + 'music-news/">Read</a>' +
          '<a href="' + BASE + '#watch">Watch</a>' +
          '<a href="https://xpn.org/listen/">Listen</a>' +
          '<a href="https://xpn.org/connect/">Connect</a>' +
        '</nav>' +

        '<nav class="header-nav header-nav--right" aria-label="Secondary navigation">' +
          '<a href="https://xpn.org/playlist/">Playlist</a>' +
          '<a href="' + BASE + 'concert-calendar/">Concert Calendar</a>' +
        '</nav>' +

      '</div>' +
    '</div>' +

    '<nav class="header-drawer" id="header-drawer" aria-hidden="true" aria-label="Mobile navigation">' +
      '<button class="header-drawer__close" aria-label="Close menu">&times;</button>' +
      '<div class="drawer-primary">' +
        '<a href="' + BASE + 'music-news/">Read</a>' +
        '<a href="' + BASE + '#watch">Watch</a>' +
        '<a href="https://xpn.org/listen/">Listen</a>' +
        '<a href="https://xpn.org/connect/">Connect</a>' +
        '<a href="https://xpn.org/playlist/">Playlist</a>' +
        '<a href="' + BASE + 'concert-calendar/">Concert Calendar</a>' +
        '<a href="https://xpn.org/support/" class="nav-donate">Donate</a>' +
        '<hr class="drawer-divider">' +
      '</div>' +
      '<a href="https://xpn.org/newsletters/">Newsletters</a>' +
      '<a href="' + BASE + 'membership.html">Membership</a>' +
      '<a href="https://xpn.org/support/">Support WXPN</a>' +
      '<a href="https://xpn.org/volunteer/">Volunteer</a>' +
      '<a href="https://xpn.org/connect/">Contact Us</a>' +
    '</nav>';

  // If placeholder div, replace with a real header element
  if (target.id === 'site-header') {
    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = html;
    target.parentNode.replaceChild(header, target);
  } else {
    target.innerHTML = html;
  }

  // Create the drawer overlay right after the header
  if (!document.getElementById('drawer-overlay')) {
    var overlay = document.createElement('div');
    overlay.className = 'header-drawer-overlay';
    overlay.id = 'drawer-overlay';
    var headerEl = document.querySelector('header.site-header');
    if (headerEl && headerEl.nextSibling) {
      headerEl.parentNode.insertBefore(overlay, headerEl.nextSibling);
    } else if (headerEl) {
      headerEl.parentNode.appendChild(overlay);
    }
  }
}

/* ── 4. Footer injection ── */
function injectFooter() {
  var target = document.querySelector('footer.site-footer') || document.getElementById('site-footer');
  if (!target) return;

  var html =
    '<div class="container">' +

      '<div class="footer-top">' +

        '<div class="footer-meta">' +
          '<div class="footer-brand">' +
            '<div class="footer-brand__wordmark">wxpn</div>' +
          '</div>' +
          '<div class="footer-cta">' +
            '<a href="https://xpn.org/support/" class="footer-donate-btn">' +
              'Donate' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
            '</a>' +
            '<div class="footer-social">' +
              '<a href="https://facebook.com/wxpn" aria-label="Facebook">' +
                '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
              '</a>' +
              '<a href="https://instagram.com/wxpn" aria-label="Instagram">' +
                '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' +
              '</a>' +
              '<a href="https://youtube.com/wxpn" aria-label="YouTube">' +
                '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<nav class="footer-nav" aria-label="Footer navigation">' +
          '<div class="footer-nav__col">' +
            '<button class="footer-nav__toggle" aria-expanded="false">' +
              'Get Involved' +
              CHEVRON_DOWN_SVG +
            '</button>' +
            '<ul class="footer-nav__list">' +
              '<li><a href="' + BASE + 'membership.html">Membership</a></li>' +
              '<li><a href="https://xpn.org/volunteer/">Volunteer</a></li>' +
              '<li><a href="https://xpn.org/internships/">Internships &amp; Work Study</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-nav__col">' +
            '<button class="footer-nav__toggle" aria-expanded="false">' +
              'About' +
              CHEVRON_DOWN_SVG +
            '</button>' +
            '<ul class="footer-nav__list">' +
              '<li><a href="https://xpn.org/about/">About WXPN</a></li>' +
              '<li><a href="' + BASE + 'business-support/">Business Support</a></li>' +
              '<li><a href="https://xpn.org/musicians-on-call/">Musicians On Call</a></li>' +
              '<li><a href="https://xpn.org/press/">Press Room</a></li>' +
              '<li><a href="https://xpn.org/public-file/">Public Inspection File</a></li>' +
              '<li><a href="https://xpn.org/privacy/">Privacy Policy</a></li>' +
            '</ul>' +
          '</div>' +
        '</nav>' +

      '</div>' +

      '<div class="footer-bottom">' +
        'Copyright &copy;2026 WXPN / The Trustees of The University of Pennsylvania, All Rights Reserved &middot; XPN.org is made possible with the generous support of XPN Members and our Business Sponsors.' +
      '</div>' +

    '</div>';

  // If placeholder div, replace with a real footer element
  if (target.id === 'site-footer') {
    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = html;
    target.parentNode.replaceChild(footer, target);
  } else {
    target.innerHTML = html;
  }
}

/* ── 5. Shared behaviors ── */

/* Header scroll collapse */
function initHeaderCollapse() {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var collapsed = false;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (!collapsed && y > 80) {
      collapsed = true;
      header.classList.add('is-collapsed');
    } else if (collapsed && y < 50) {
      collapsed = false;
      header.classList.remove('is-collapsed');
    }
  }, { passive: true });
}

/* Mobile drawer with focus trap */
function initDrawer() {
  var menuBtns = document.querySelectorAll('.header-menu-btn');
  var closeBtn = document.querySelector('.header-drawer__close');
  var drawer   = document.getElementById('header-drawer');
  var overlay  = document.getElementById('drawer-overlay');
  if (!drawer) return;

  var lastFocused = null;

  function openDrawer() {
    lastFocused = document.activeElement;
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtns.forEach(function(b) { b.setAttribute('aria-expanded', 'true'); });
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtns.forEach(function(b) { b.setAttribute('aria-expanded', 'false'); });
    if (lastFocused) lastFocused.focus();
  }

  // Focus trap: keep Tab inside drawer while it's open
  drawer.addEventListener('keydown', function(e) {
    if (!drawer.classList.contains('is-open')) return;
    var focusable = Array.from(
      drawer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
    ).filter(function(el) { return !el.hasAttribute('disabled'); });
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (e.key === 'Escape') closeDrawer();
  });

  menuBtns.forEach(function(b) { b.addEventListener('click', openDrawer); });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
}

/* Footer accordion (mobile) */
function initFooterAccordion() {
  document.querySelectorAll('.footer-nav__toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var col = this.closest('.footer-nav__col');
      var isOpen = col.classList.toggle('is-open');
      this.setAttribute('aria-expanded', isOpen);
    });
  });
}

/* ── 6. Initialization ── */
document.addEventListener('DOMContentLoaded', function() {
  injectHeader();
  injectFooter();
  initHeaderCollapse();
  initDrawer();
  initFooterAccordion();
});
