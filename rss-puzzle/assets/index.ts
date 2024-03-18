"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const auth_1 = require("./module/auth/auth");
const header_1 = require("./module/header/header");
const page_wrapper_1 = require("./module/page-wrapper/page-wrapper");
const game_page_1 = require("./pages/game-page/game-page");
const login_page_1 = require("./pages/login-page/login-page");
const start_page_1 = require("./pages/start-page/start-page");
require("./styles.scss");
const header = (0, header_1.Header)();
document.body.append(header);
const pageWrapper = (0, page_wrapper_1.PageWrapper)();
document.body.append(pageWrapper);
const auth = (0, auth_1.checkIsLogin)();
const isGame = (0, auth_1.checkIsGame)();
if (auth === 'true') {
  if (isGame === 'true') {
    (0, game_page_1.GamePage)(pageWrapper);
  } else {
    (0, start_page_1.StartPage)(pageWrapper);
  }
} else {
  (0, login_page_1.LoginPage)(pageWrapper);
}