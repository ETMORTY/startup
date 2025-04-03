class Option {
    constructor(text, next1, next2, option) {
        this.text = text;
        this.next1 = next1;
        this.next2 = next2;
        this.option = option;
    }
}

export class Story {
    constructor(Title, Intro, oneA, oneB, twoA, twoB, twoC, twoD, threeA, 
        threeB, threeC, threeD, threeE, threeF, threeG, threeH, fourA, fourB, 
        fourC, fourD, fourE, fourF, fourG, fourH, fourI, fourJ, fourK, fourL, 
        fourM, fourN, fourO, fourP) {
        this.Title = Title;
        this.Intro = Intro;
    
        this.Option4P = new Option(fourP, null, null, "4P");
        this.Option4O = new Option(fourO, null, null, "4O");
        this.Option4N = new Option(fourN, null, null, "4N");
        this.Option4M = new Option(fourM, null, null, "4M");
        this.Option4L = new Option(fourL, null, null, "4L");
        this.Option4K = new Option(fourK, null, null, "4K");
        this.Option4J = new Option(fourJ, null, null, "4J");
        this.Option4I = new Option(fourI, null, null, "4I");
        this.Option4H = new Option(fourH, null, null, "4H");
        this.Option4G = new Option(fourG, null, null, "4G");
        this.Option4F = new Option(fourF, null, null, "4F");
        this.Option4E = new Option(fourE, null, null, "4E");
        this.Option4D = new Option(fourD, null, null, "4D");
        this.Option4C = new Option(fourC, null, null, "4C");
        this.Option4B = new Option(fourB, null, null, "4B");
        this.Option4A = new Option(fourA, null, null, "4A");
        this.Option3H = new Option(threeH, this.Option4O, this.Option4P, "3H");
        this.Option3G = new Option(threeG, this.Option4M, this.Option4N, "3G");
        this.Option3F = new Option(threeF, this.Option4K, this.Option4L, "3F");
        this.Option3E = new Option(threeE, this.Option4I, this.Option4J, "3E");
        this.Option3D = new Option(threeD, this.Option4G, this.Option4H, "3D");
        this.Option3C = new Option(threeC, this.Option4E, this.Option4F, "3C");
        this.Option3B = new Option(threeB, this.Option4C, this.Option4D, "3B");
        this.Option3A = new Option(threeA, this.Option4A, this.Option4B, "3A");
        this.Option2D = new Option(twoD, this.Option3G, this.Option3H, "2D");
        this.Option2C = new Option(twoC, this.Option3E, this.Option3F, "2C");
        this.Option2B = new Option(twoB, this.Option3C, this.Option3D, "2B");
        this.Option2A = new Option(twoA, this.Option3A, this.Option3B, "2A");
        this.Option1B = new Option(oneB, this.Option2C, this.Option2D, "1B");
        this.Option1A = new Option(oneA, this.Option2A, this.Option2B, "1A");
        this.OptionIntro = new Option(Intro, this.Option1A, this.Option1B, "Intro");
    }
}

export default Story;