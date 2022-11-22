import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/pages/home-thirteen/home-thirteen.component';
import { HomeFourteenComponent } from './components/pages/home-fourteen/home-fourteen.component';
import { HomeFifteenComponent } from './components/pages/home-fifteen/home-fifteen.component';
import { HomeSixteenComponent } from './components/pages/home-sixteen/home-sixteen.component';
import { HomeSeventeenComponent } from './components/pages/home-seventeen/home-seventeen.component';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { HomeNineteenComponent } from './components/pages/home-nineteen/home-nineteen.component';
import { HomeTwentyComponent } from './components/pages/home-twenty/home-twenty.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-2', component: HomeTwoComponent},
    {path: 'home-3', component: HomeThreeComponent},
    {path: 'home-4', component: HomeFourComponent},
    {path: 'home-5', component: HomeFiveComponent},
    {path: 'home-6', component: HomeSixComponent},
    {path: 'home-7', component: HomeSevenComponent},
    {path: 'home-8', component: HomeEightComponent},
    {path: 'home-9', component: HomeNineComponent},
    {path: 'home-10', component: HomeTenComponent},
    {path: 'home-11', component: HomeElevenComponent},
    {path: 'home-12', component: HomeTwelveComponent},
    {path: 'home-13', component: HomeThirteenComponent},
    {path: 'home-14', component: HomeFourteenComponent},
    {path: 'home-15', component: HomeFifteenComponent},
    {path: 'home-16', component: HomeSixteenComponent},
    {path: 'home-17', component: HomeSeventeenComponent},
    {path: 'home-18', component: HomeEighteenComponent},
    {path: 'home-19', component: HomeNineteenComponent},
    {path: 'home-20', component: HomeTwentyComponent},
    {path: 'blog-1', component: BlogOneComponent},
    {path: 'blog-2', component: BlogTwoComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }