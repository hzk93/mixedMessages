let mixedMsg = ['Good Luck!','What a great day to be alive!','Being a Taurian you have high levels of determination','JS Pays the bills'];
let astroMsg = ['13th of May, the people are awesome!','Great day to be here, enjoy your time!','Your horoscope is awesome!'];
let inspireMsg = ['You have figured this!','Go man','You can do this'];
let nonsensicalJoke = ['What does a baby duck call out for!','Hahahah','sore loser'];
let randomNumber1 = Math.floor(Math.random()*mixedMsg.length);
let randomNumber2 = Math.floor(Math.random()*astroMsg.length);
let randomNumber3 = Math.floor(Math.random()*inspireMsg.length);
let randomNumber4 = Math.floor(Math.random()*nonsensicalJoke.length);

const randomMsgs = () => {
    console.log(mixedMsg[randomNumber1]+' '+astroMsg[randomNumber2]+' '+inspireMsg[randomNumber3]+' '+nonsensicalJoke[randomNumber4]);
}


randomMsgs();

