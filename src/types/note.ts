export default interface NoteType {
    title: string;
    desc: string;
    id: number;
}

export class Post implements NoteType {
    id: number;

    constructor(
        public title: string,
        public desc: string
    ) {
        // to generate random id 
        this.id = Math.floor(Math.random() * 100);
    }
}
