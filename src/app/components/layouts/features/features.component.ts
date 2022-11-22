import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Features',
            title: 'We Always Try To Understand Users Expectation',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]

    singleFeatures: singleFeaturesContent[] = [
        {
            icon: 'icofont-edit',
            title: 'Creative Design',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec.'
        },
        {
            icon: 'icofont-upload-alt',
            title: 'Market Strategy',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec.'
        },
        {
            icon: 'icofont-pie-chart',
            title: 'Business Growth',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec.'
        }
    ]

}

class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}

class singleFeaturesContent {
    icon : string;
    title : string;
    paragraphText : string;
}