import { ImageBlock } from "./formatted-block.interface";

export class Projet {
    
    imageBannerAlt: string;


    constructor(public id: string,
        public title: string,
        public description: string,
        public customer: string,
        public date: string,
        public roles: string[],
        public resultUrl: string,
        public imageBannerUrl: ImageBlock) 
        {
            this.imageBannerAlt = 'Bannière du projet '+this.title;
        }
}