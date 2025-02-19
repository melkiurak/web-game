interface Platform {
    value: string;
}
interface Image {
    url: string;
}
export interface Game{
    name: string;
    description: string;
    objectId: string;
    date: string;
    metacriticScore: number;
    metacriticScoreMax: number;
    price:number;
    genre: string;
    platform: Platform[];
    BannerImg: Image;
    BackgroundTop: Image;
} 
export interface GameNode{
    node: Game
}
export interface GamesData{
    games: {
        count: number,
        edges:GameNode[],
    }
}
export interface HeroProps {
    data: GamesData | undefined;
    slide: number;
    setSlide: React.Dispatch<React.SetStateAction<number>>;
}