export class Projet {
    
    imageBannerAlt: string;


    constructor(public id: string,
        public title: string,
        public description: string,
        public customer: string,
        public date: string,
        public roles: string[],
        public resultUrl: string,
        public imageBannerUrl: string,
        /*public content: string*/) {
            this.imageBannerAlt = this.title+' image';
        }
}