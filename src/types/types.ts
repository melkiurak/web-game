export interface Game{
    objectId: string,
    name: string,
    BackgroundTop: {
        url: string
    }
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