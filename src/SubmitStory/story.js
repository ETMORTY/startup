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
        fourM, fourN, fourO, fourP, storyMap) {
        this.Title = Title;
        this.storyMap = storyMap;
        this.Intro = Intro;
        this.oneA = oneA;  
        this.oneB = oneB;
        this.twoA = twoA;
        this.twoB = twoB;
        this.twoC = twoC;
        this.twoD = twoD;
        this.threeA = threeA;
        this.threeB = threeB;
        this.threeC = threeC;
        this.threeD = threeD;
        this.threeE = threeE;
        this.threeF = threeF;
        this.threeG = threeG;
        this.threeH = threeH;
        this.fourA = fourA;
        this.fourB = fourB;
        this.fourC = fourC;
        this.fourD = fourD;
        this.fourE = fourE;
        this.fourF = fourF;
        this.fourG = fourG;
        this.fourH = fourH;
        this.fourI = fourI;
        this.fourJ = fourJ;
        this.fourK = fourK;
        this.fourL = fourL;
        this.fourM = fourM;
        this.fourN = fourN;
        this.fourO = fourO;
        this.fourP = fourP;
        new Option(Intro, oneA, oneB);
        new Option(oneA, twoA, twoB);
        new Option(oneB, twoC, twoD);
        new Option(twoA, threeA, threeB);
        new Option(twoB, threeC, threeD);
        new Option(twoC, threeE, threeF);
        new Option(twoD, threeG, threeH);
        new Option(threeA, fourA, fourB);
        new Option(threeB, fourC, fourD);
        new Option(threeC, fourE, fourF);
        new Option(threeD, fourG, fourH);
        new Option(threeE, fourI, fourJ);
        new Option(threeF, fourK, fourL);
        new Option(threeG, fourM, fourN);
        new Option(threeH, fourO, fourP);
    }
}

export default Story;