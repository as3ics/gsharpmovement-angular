/** @format */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreloaderComponent } from "./components/layouts/preloader/preloader.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { NavbarComponent } from "./components/layouts/navbar/navbar.component";
import { StoryComponent } from "./components/layouts/story/story.component";
import { HomeOneComponent } from "./components/pages/home-one/home-one.component";
import { TeamComponent } from "./components/layouts/team/team.component";
import { TestimonialComponent } from "./components/layouts/testimonial/testimonial.component";
import { CtaComponent } from "./components/layouts/cta/cta.component";
import { CallToActionComponent } from "./components/layouts/call-to-action/call-to-action.component";
import { SubscribeComponent } from "./components/layouts/subscribe/subscribe.component";
import { ContactComponent } from "./components/layouts/contact/contact.component";
import { PartnerComponent } from "./components/layouts/partner/partner.component";
import { AboutComponent } from "./components/layouts/about/about.component";
import { ServicesComponent } from "./components/layouts/services/services.component";
import { PortfolioComponent } from "./components/layouts/portfolio/portfolio.component";
import { SkillsComponent } from "./components/layouts/skills/skills.component";
import { FeaturesComponent } from "./components/layouts/features/features.component";
import { WhyWeDifferentComponent } from "./components/layouts/why-we-different/why-we-different.component";
import { FunfactsComponent } from "./components/layouts/funfacts/funfacts.component";
import { PricingComponent } from "./components/layouts/pricing/pricing.component";
import { FaqComponent } from "./components/layouts/faq/faq.component";
import { BlogComponent } from "./components/layouts/blog/blog.component";
import { CtaTwoComponent } from "./components/layouts/cta-two/cta-two.component";
import { WhoWeAreComponent } from "./components/layouts/who-we-are/who-we-are.component";
import { FunfactsTwoComponent } from "./components/layouts/funfacts-two/funfacts-two.component";
import { BlogOneComponent } from "./components/pages/blog-one/blog-one.component";
import { BlogTwoComponent } from "./components/pages/blog-two/blog-two.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { DemoSidebarComponent } from "./components/layouts/demo-sidebar/demo-sidebar.component";
import { WhoWeAreCloneComponent } from "./components/layouts/who-we-are-clone/who-we-are.component";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';
import { DownloadService } from "./services/downloads.service";
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { NFTComponent } from "./components/layouts/nfts/nfts.component";

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    StoryComponent,
    HomeOneComponent,
    TeamComponent,
    TestimonialComponent,
    CtaComponent,
    CallToActionComponent,
    SubscribeComponent,
    ContactComponent,
    PartnerComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    SkillsComponent,
    FeaturesComponent,
    WhyWeDifferentComponent,
    FunfactsComponent,
    PricingComponent,
    FaqComponent,
    BlogComponent,
    CtaTwoComponent,
    WhoWeAreComponent,
    FunfactsTwoComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogDetailsComponent,
    ErrorComponent,
    DemoSidebarComponent,
    WhoWeAreCloneComponent,
    NFTComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({ closeButton: true, maxOpened: 1, autoDismiss: true, tapToDismiss: true, timeOut: 5000 }),
    BrowserAnimationsModule,
    HttpClientModule,
    ShareButtonsModule,
    ShareIconsModule,
    FontAwesomeModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [DownloadService],
  bootstrap: [AppComponent],
})
export class AppModule { }
