export class Projet {
    
    imageBannerAlt: string;


    constructor(public id: string,
        public title: string,
        public label: string[],
        public description: string,
        public imageBannerUrl: string,
        public content: string) {
            this.imageBannerAlt = this.title+' image';
        }
}