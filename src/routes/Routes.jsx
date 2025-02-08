import React from 'react';
import { Root } from "../layout/Root";
import { AboutPage } from "../Pages/CompanyPage/AboutPage";
import { TechPartnerPage } from "../Pages/CompanyPage/TechPartnerPage";
import { ContuctUsPage } from "../Pages/ContactUsPage/ContuctUsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { StructuredCabilingPage } from "../Pages/ServicesPage/StructuredCabilingPage";
import { BreakFixServicesPage } from "../Pages/ServicesPage/BreakFixServicesPage";
import { SubmitTicketPage } from "../Pages/SubmitTicketPage.jsx/SubmitTicketPage";
import { BlogPage } from "../Pages/BlogPage/BlogPage";
import { Login } from "../Auth/Login";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Verification } from "../Auth/Verification";
import { NewPassword } from "../Auth/NewPassword";
import { SignUp } from "../Auth/SignUp";

import { OngoingTicketPage } from "../Pages/ProfilePage/OngoingTicketPage";
import { BlogCardDetails } from '../Components/blogs/BlogCardDetails';
import { RackAndDevicePage } from '../Pages/ServicesPage/RackAndDevicePage';
import { ConsultationsPage } from '../Pages/consultationsPage/ConsultationsPage';
import { SurvicesBundlesPage } from '../Pages/SurvicesBundle/SurvicesBundlesPage';
import { PricingStrategyPage } from '../Pages/pricingStrategyPage/PricingStrategyPage';
import { SiteSurveysPage } from '../Pages/siteSurveys/SiteSurveysPage';
import { OurTeamPage } from '../Pages/OurTeamPage/OurTeamPage';
import { CareersPage } from '../Pages/CareersPage/CareersPage';
import { NetworkMigrationsPage } from '../Pages/NetworkMigrations/NetworkMigrationsPage';
import { NewDeployment } from '../Pages/newdeployment/NewDeployment';
import { NewUpdatePage } from '../Pages/NewUpdate/NewUpdatePage';
import { ExploreOurServices } from '../Pages/exploreOurServicesPage/ExploreOurServices';
import { NewTicketPage } from '../Pages/newTicket/NewTicketPage';
import { PrivecyPolicy } from '../Pages/ProfilePage/PrivecyPolicy';
import { TermsCondition } from '../Pages/ProfilePage/TermsCondition';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import { Feedback } from '../Pages/ProfilePage/Feedback';
import { JoinPartner } from '../Components/TechPartner/JoinPartner';
import { Activation } from '../Auth/Activation';
import { LeaderShip } from '../Pages/leaderShip/LeaderShip';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/company/about-us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/company/tech-pertners',
                element: <TechPartnerPage></TechPartnerPage>
            },
            {
                path: '/company/careers',
                element: <CareersPage></CareersPage>
            },
            {
                path: '/company/our-team',
                element: <OurTeamPage></OurTeamPage>
            },
            {
                path: '/our-services',
                element: <ExploreOurServices></ExploreOurServices>
            },
            {
                path: '/new-ticket',
                element: <NewTicketPage></NewTicketPage>
            },
            {
                path: '/privacy-policy',
                element: <PrivecyPolicy></PrivecyPolicy>
            },
            {
                path: '/terms-condition',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/new-ticket',
                element: <NewTicketPage></NewTicketPage>
            },
            {
                path: '/join-our-partner',
                element: <JoinPartner></JoinPartner>
            },
            {
                path: '/company/new-update',
                element: <NewUpdatePage></NewUpdatePage>
            },
            {
                path: '/services/Structure-Cabling',
                element: <StructuredCabilingPage></StructuredCabilingPage>
            },
            {
                path: '/services/Break-FixServices',
                element: <BreakFixServicesPage></BreakFixServicesPage>
            },
            {
                path: '/services/rack-and-device-installation',
                element: <RackAndDevicePage></RackAndDevicePage>
            },
            {
                path: '/services/consultation-on-cutting',
                element: <ConsultationsPage></ConsultationsPage>
            },
            {
                path: '/services/service-bundle',
                element: <SurvicesBundlesPage></SurvicesBundlesPage>
            },
            {
                path: '/services/pricing-strategy',
                element: <PricingStrategyPage></PricingStrategyPage>
            },
            {
                path: '/services/site-surveys',
                element: <SiteSurveysPage></SiteSurveysPage>
            },
            {
                path: '/services/Network-Migrations',
                element: <NetworkMigrationsPage></NetworkMigrationsPage>
            },
            {
                path: '/services/new-network',
                element: <NewDeployment></NewDeployment>
            },
            {
                path: '/contactUs',
                element: <ContuctUsPage></ContuctUsPage>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/blog/blogDetails/:id',
                element: <BlogCardDetails></BlogCardDetails>
            },
            {
                path: '/submit-a-ticket',
                element: <SubmitTicketPage></SubmitTicketPage>
            },

            {
                path: '/profilePage',
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/leadership',
                element: <LeaderShip></LeaderShip>
            },
            {
                path: '/feedback',
                element: <Feedback></Feedback>
            },
            {
                path: '/profilePage/ongoing-tickets',
                element: <OngoingTicketPage></OngoingTicketPage>
            },
        ]
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>
    },

    {
        path: '/auth/signUp/activation',
        element: <Activation></Activation>
    },

    {
        path: '/auth/verification',
        element: <Verification></Verification>
    },
    {
        path: '/auth/update-password',
        element: <NewPassword></NewPassword>
    }
]);