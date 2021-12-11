import React from "react";
import "@fontsource/montserrat";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="page">
      <div id="topbar" className="navbar-container" data-v-48bb141a>
        <div className="navbar" data-v-48bb141a>
          <section className="left --desktop" data-v-48bb141a>
            <div className="logo is-cursor" data-v-48bb141a>
              <img
                alt="The Sandbox"
                src="/img/01_Top_Bar/TheSandboxLogo.svg"
                className="topbar-logo desk"
                data-v-48bb141a
              />
            </div>
          </section>
          <section className="right is-relative" data-v-48bb141a>
            <div className="mobile-menu-container" data-v-48bb141a>
              <div className="burger-container" data-v-48bb141a>
                <div className="burger --mobile" data-v-48bb141a>
                  <span data-v-48bb141a />
                  <span data-v-48bb141a />
                  <span data-v-48bb141a />
                </div>
              </div>
              <div className="logo --mobile" data-v-48bb141a>
                <img
                  alt="The Sandbox"
                  src="/img/01_Top_Bar/TSBLogo-mobile.svg"
                  className="topbar-logo desk"
                  data-v-48bb141a
                />
              </div>
              <div className="touch-auto-margin" data-v-48bb141a />
              <div
                className="language-bar --only-desktop language-bar-container"
                data-v-3d56ca4e
                data-v-48bb141a
              >
                <button
                  className="language-dropdown language-item"
                  data-v-3d56ca4e
                >
                  <svg className="icon-globe" data-v-3d56ca4e>
                    <use xlinkHref="#icon-globe" data-v-3d56ca4e />
                  </svg>
                  <p
                    className="--desktop language-title selected"
                    data-v-3d56ca4e
                  >
                    EN
                  </p>
                  <p
                    className="--mobile language-title selected"
                    data-v-3d56ca4e
                  >
                    <img
                      src="/img/01_Top_Bar/LanguageBar_EnglishFlag.png"
                      data-v-3d56ca4e
                    />
                  </p>
                </button>
                <div className="language-menu" data-v-3d56ca4e>
                  <div className="language-item option" data-v-3d56ca4e>
                    <img
                      src="/img/01_Top_Bar/LanguageBar_EnglishFlag.png"
                      alt="EN"
                      className="language-flag"
                      data-v-3d56ca4e
                    />
                    <span className="language-title selected" data-v-3d56ca4e>
                      EN
                    </span>
                    <div
                      className="tintable-image language-check"
                      style={{
                        WebkitMaskBoxImage:
                          "url(/img/01_Top_Bar/CheckIcon_White.png)",
                        mask: "url(/img/01_Top_Bar/CheckIcon_White.png)",
                      }}
                      data-v-3d56ca4e
                    />
                  </div>
                  <div className="language-item option" data-v-3d56ca4e>
                    <img
                      src="/img/01_Top_Bar/LanguageBar_KoreanFlag.png"
                      alt="KR"
                      className="language-flag"
                      data-v-3d56ca4e
                    />
                    <span className="language-title" data-v-3d56ca4e>
                      KR
                    </span>
                  </div>
                  <div className="language-item option" data-v-3d56ca4e>
                    <img
                      src="/img/01_Top_Bar/LanguageBar_ChineseFlag.png"
                      alt="CN"
                      className="language-flag"
                      data-v-3d56ca4e
                    />
                    <span className="language-title" data-v-3d56ca4e>
                      CN
                    </span>
                  </div>
                </div>
              </div>
              <div className="login-button" data-v-48bb141a>
                <button
                  color="primary"
                  type="button"
                  id="sign-in-button"
                  className="login"
                  data-v-93e712f0
                  data-v-48bb141a
                >
                  Sign In
                </button>
              </div>
            </div>
            <img
              src="/img/16_Presale/shopping-cart.svg"
              alt
              className="cart-icon is-cursor"
              data-v-48bb141a
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
