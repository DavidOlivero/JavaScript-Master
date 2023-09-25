import { Injectable } from "@angular/core";
import { VideoGame } from "../models/video-game";

@Injectable()
export class VideoGameService {
    public videoGames: Array<VideoGame> //VideoGames[]

    constructor () {
        // Game list
        const game1 = new VideoGame("Assassin's Creed Valhalla", "Action-Adventure", 2020, "PlayStation 5", 0);
        const game2 = new VideoGame("The Legend of Zelda: Breath of the Wild", "Action-Adventure", 2017, "Nintendo Switch", 1);
        const game3 = new VideoGame("Red Dead Redemption 2", "Action-Adventure", 2018, "Xbox One", 2);
        const game4 = new VideoGame("The Witcher 3: Wild Hunt", "Action-Adventure", 2015, "PC", 3);
        const game5 = new VideoGame("God of War", "Action-Adventure", 2018, "PlayStation 4", 4);
        const game6 = new VideoGame("Grand Theft Auto V", "Action-Adventure", 2013, "Xbox One", 5);
        const game7 = new VideoGame("Super Mario Odyssey", "Platformer", 2017, "Nintendo Switch", 6);
        const game8 = new VideoGame("Minecraft", "Sandbox", 2011, "PC", 7);
        const game9 = new VideoGame("The Last of Us Part II", "Action-Adventure", 2020, "PlayStation 4", 8);
        const game10 = new VideoGame("Call of Duty: Modern Warfare", "First-person shooter", 2019, "Xbox One", 9);

        this.videoGames = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10];
    }

    public getVideoGames = (): Array<VideoGame> => {
        return this.videoGames
    }
}