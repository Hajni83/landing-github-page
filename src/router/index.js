import Vue from "vue";
import Router from "vue-router";
import AuthRequired from './authRequired'
Vue.use(Router);

import Error from "pages/Error";
import User from "pages/user";
import UserLogin from "pages/user/Login";
import UserRegister from "pages/user/Register";
import UserForgotPassword from "pages/user/ForgotPassword";

import LandingPages from 'pages/landingPages'
import LandingPagesMultipageHome from 'pages/landingPages/MultipageHome'
import LandingPagesSinglepageHome from 'pages/landingPages/SinglepageHome'
import LandingPagesAbout from 'pages/landingPages/About'
import LandingPagesAuthLogin from 'pages/landingPages/AuthLogin'
import LandingPagesAuthRegister from 'pages/landingPages/AuthRegister'
import LandingPagesBlog from 'pages/landingPages/Blog'
import LandingPagesBlogDetail from 'pages/landingPages/BlogDetail'
import LandingPagesCareers from 'pages/landingPages/Careers'
import LandingPagesConfirmation from 'pages/landingPages/Confirmation'
import LandingPagesContact from 'pages/landingPages/Contact'
import LandingPagesContent from 'pages/landingPages/Content'
import LandingPagesDocs from 'pages/landingPages/Docs'
import LandingPagesDocsDetail from 'pages/landingPages/DocsDetail'
import LandingPagesFeatures from 'pages/landingPages/Features'
import LandingPagesPrices from 'pages/landingPages/Prices'
import LandingPagesVideos from 'pages/landingPages/Videos'
import LandingPagesVideoDetail from 'pages/landingPages/VideoDetail'

import App from "pages/app";

import Dashboards from "pages/app/dashboards";
import DashboardsDefault from "pages/app/dashboards/Default";
import DashboardsAnalytics from "pages/app/dashboards/Analytics";
import DashboardsEcommerce from "pages/app/dashboards/Ecommerce";
import DashboardsContent from "pages/app/dashboards/Content";

import Layouts from "pages/app/layouts";
import LayoutsDataList from "pages/app/layouts/DataList";
import LayoutsThumbList from "pages/app/layouts/ThumbList";
import LayoutsImageList from "pages/app/layouts/ImageList";
import LayoutsDetails from "pages/app/layouts/Details";
import LayoutsSearch from "pages/app/layouts/Search";

import Applications from "pages/app/applications"
import ApplicationsTodo from "pages/app/applications/Todo"
import ApplicationsSurvey from "pages/app/applications/Survey"
import ApplicationsSurveyDetail from "pages/app/applications/SurveyDetail"
import ApplicationsChat from "pages/app/applications/Chat"

import UI from "pages/app/ui";
import UiAlerts from "pages/app/ui/Alerts";
import UiBadges from "pages/app/ui/Badges";
import UiButtons from "pages/app/ui/Buttons";
import UiCards from "pages/app/ui/Cards";
import UiCarousel from "pages/app/ui/Carousel";
import UiCharts from "pages/app/ui/Charts";
import UiCollapse from "pages/app/ui/Collapse";
import UiDropdowns from "pages/app/ui/Dropdowns";
import UiEditors from "pages/app/ui/Editors";
import UiForms from "pages/app/ui/Forms";
import UiFormComponents from "pages/app/ui/FormComponents";
import UiIcons from "pages/app/ui/Icons";
import UiInputGroups from "pages/app/ui/InputGroups";
import UiJumbotron from "pages/app/ui/Jumbotron";
import UiModal from "pages/app/ui/Modal";
import UiNavigation from "pages/app/ui/Navigation";
import UiPopoverTooltip from "pages/app/ui/PopoverTooltip";
import UiSortable from "pages/app/ui/Sortable";


const routes = [
  {
    path: "/landing-github-page/",
    component:LandingPages,
    redirect: "/app",
    children: [
      {path: "multipage-home",component: LandingPagesMultipageHome},
      {path: "about",component: LandingPagesAbout},
      {path: "auth-login",component: LandingPagesAuthLogin},
      {path: "auth-register",component: LandingPagesAuthRegister},
      {path: "blog",component: LandingPagesBlog},
      {path: "blog-detail",component: LandingPagesBlogDetail},
      {path: "careers",component: LandingPagesCareers},
      {path: "confirmation",component: LandingPagesConfirmation},
      {path: "contact",component: LandingPagesContact},
      {path: "content",component: LandingPagesContent},
      {path: "docs",component: LandingPagesDocs},
      {path: "docs-detail",component: LandingPagesDocsDetail},
      {path: "features",component: LandingPagesFeatures},
      {path: "prices",component: LandingPagesPrices},
      {path: "videos",component: LandingPagesVideos},
      {path: "video-detail",component: LandingPagesVideoDetail},
    ]
  },
  {path: "/singlepage-home",component: LandingPagesSinglepageHome},
  {path: "/error",component: Error},
  {
    path: "/user",
    component: User,
    redirect: "/user/login",
    children: [
      {path: "login",component: UserLogin},
      {path: "register",component: UserRegister},
      {path: "forgot-password",component: UserForgotPassword},
    ]
  },
  {
    path: "/app",
    component: App,
    redirect: "/app/dashboards",
    beforeEnter   :AuthRequired,
    children:[
      {
        path: "dashboards",
        component: Dashboards,
        redirect: "/app/dashboards/default",
        children: [
          { path: "default", component: DashboardsDefault },
          { path: "analytics", component: DashboardsAnalytics },
          { path: "ecommerce", component: DashboardsEcommerce },
          { path: "content", component: DashboardsContent }
        ]
      },
      {
        path: "layouts",
        component: Layouts,
        redirect: "/app/layouts/data-list",
        children: [
          { path: "data-list", component: LayoutsDataList },
          { path: "thumb-list", component: LayoutsThumbList },
          { path: "image-list", component: LayoutsImageList },
          { path: "details", component: LayoutsDetails },
          { path: "search", component: LayoutsSearch }
        ]
      },
      {
        path: "applications",
        component: Applications,
        redirect: "/app/applications/todo",
        children: [
          { path: "todo", component: ApplicationsTodo },
          { path: "survey", component: ApplicationsSurvey },
          { path: 'survey/:id', component: ApplicationsSurveyDetail, props: true },
          { path: "chat", component: ApplicationsChat },
        ]
      },
      {
        path: "ui",
        component: UI,
        redirect: "/app/ui/alerts",
        children: [
          { path: "alerts", component: UiAlerts },
          { path: "badges", component: UiBadges },
          { path: "buttons", component: UiButtons },
          { path: "cards", component: UiCards },
          { path: "carousel", component: UiCarousel },
          { path: "charts", component: UiCharts },
          { path: "collapse", component: UiCollapse },
          { path: "dropdowns", component: UiDropdowns },
          { path: "editors", component: UiEditors },
          { path: "forms", component: UiForms },
          { path: "form-components", component: UiFormComponents },
          { path: "icons", component: UiIcons },
          { path: "input-groups", component: UiInputGroups },
          { path: "jumbotron", component: UiJumbotron },
          { path: "modal", component: UiModal },
          { path: "navigation", component: UiNavigation },
          { path: "popover-tooltip", component: UiPopoverTooltip },
          { path: "sortable", component: UiSortable },
        ]
      }
    ]
  },
  { path:"*",component: Error},
];



const router =new Router({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router
