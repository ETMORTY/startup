class Option {
    constructor(text, next1, next2) {
        this.text = text;
        this.next1 = next1;
        this.next2 = next2;
    }
}

export class Story {
    constructor(Title, Intro, oneA, oneB, twoA, twoB, twoC, twoD, threeA, 
        threeB, threeC, threeD, threeE, threeF, threeG, threeH, fourA, fourB, 
        fourC, fourD, fourE, fourF, fourG, fourH, fourI, fourJ, fourK, fourL, 
        fourM, fourN, fourO, fourP) {
        this.Title = Title;
        this.Intro = Intro;
    
        this.Option4P = new Option(fourP, null, null);
        this.Option4O = new Option(fourO, null, null);
        this.Option4N = new Option(fourN, null, null);
        this.Option4M = new Option(fourM, null, null);
        this.Option4L = new Option(fourL, null, null);
        this.Option4K = new Option(fourK, null, null);
        this.Option4J = new Option(fourJ, null, null);
        this.Option4I = new Option(fourI, null, null);
        this.Option4H = new Option(fourH, null, null);
        this.Option4G = new Option(fourG, null, null);
        this.Option4F = new Option(fourF, null, null);
        this.Option4E = new Option(fourE, null, null);
        this.Option4D = new Option(fourD, null, null);
        this.Option4C = new Option(fourC, null, null);
        this.Option4B = new Option(fourB, null, null);
        this.Option4A = new Option(fourA, null, null);
        this.Option3H = new Option(threeH, this.Option4O, this.Option4P);
        this.Option3G = new Option(threeG, this.Option4M, this.Option4N);
        this.Option3F = new Option(threeF, this.Option4K, this.Option4L);
        this.Option3E = new Option(threeE, this.Option4I, this.Option4J);
        this.Option3D = new Option(threeD, this.Option4G, this.Option4H);
        this.Option3C = new Option(threeC, this.Option4E, this.Option4F);
        this.Option3B = new Option(threeB, this.Option4C, this.Option4D);
        this.Option3A = new Option(threeA, this.Option4A, this.Option4B);
        this.Option2D = new Option(twoD, this.Option3G, this.Option3H);
        this.Option2C = new Option(twoC, this.Option3E, this.Option3F);
        this.Option2B = new Option(twoB, this.Option3C, this.Option3D);
        this.Option2A = new Option(twoA, this.Option3A, this.Option3B);
        this.Option1B = new Option(oneB, this.Option2C, this.Option2D);
        this.Option1A = new Option(oneA, this.Option2A, this.Option2B);
        this.OptionIntro = new Option(Intro, this.Option1A, this.Option1B);
    }
}

export default Story;