export class VideoGame {
    /*
    public title: string;
    public genre: string;
    public releaseYear: number;
    public platform: string;
    
    constructor(title: string, genre: string, releaseYear: number, platform: string) {
        this.title = title,
        this.genre = genre,
        this.releaseYear = releaseYear
        this.platform = platform
    }
    */

    constructor(
        public title: string,
        public genre: string,
        public releaseYear: number,
        public platform: string,
        public id: number
    ) {}
}