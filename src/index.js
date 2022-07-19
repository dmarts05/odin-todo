import html from './index.html';
import './styles/index.scss';
import fixVhOnMobile from './scripts/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/sidebar-toggle.js';

fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
