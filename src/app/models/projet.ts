export class Projet {
    
    imageBannerAlt: string;


    constructor(public id: string,
        public urlProjet: string,
        public title: string,
        public customer: string,
        public role: string[],
        public date: string,
        public description: string,
        public resultUrl: string,
        public imageBannerUrl: string,
        public content: string) {
            this.imageBannerAlt = this.title+' image';
        }
}