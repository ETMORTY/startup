class Option {
    constructor(text, next1, next2) {
        this.text = text;
        this.next1 = next1;
        this.next2 = next2;
    }
}

class Story {
    constructor() {
        new Option(Intro, 1A, 1B);
        new Option(1A, 2A, 2B);
        new Option(1B, 2C, 2D);
        new Option(2A, 3A, 3B);
        new Option(2B, 3C, 3D);
        new Option(2C, 3E, 3F);
        new Option(2D, 3G, 3H);
        new Option(3A, 4A, 4B);
        new Option(3B, 4C, 4D);
        new Option(3C, 4E, 4F);
        new Option(3D, 4G, 4H);
        new Option(3E, 4I, 4J);
        new Option(3F, 4K, 4L);
        new Option(3G, 4M, 4N);
        new Option(3H, 4O, 4P);
    }
}