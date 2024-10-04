export class Projet {
    
    imageAlt: string;


    constructor(public title: string,
        public label: string,
        public description: string,
        public imageUrl: string,
        public id: string) {
            this.imageAlt = this.title+' image';
        }
}