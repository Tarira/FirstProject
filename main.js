"use strict";

let day;
let week;
let month;

const showmore = document.querySelector('.showmore');

//Navigation
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');    
const monthly = document.querySelector('.monthly');

// Work-section
const curWork = document.querySelector('.current-work');  
const prevWork = document.querySelector('.previous-work');

//Play-section
const curPlay = document.querySelector('.current-play');
const prevPlay = document.querySelector('.previous-play');

//Study-section
const curStudy = document.querySelector('.current-study');
const prevStudy = document.querySelector('.previous-study');

//Exercise-section
const curExercise = document.querySelector('.current-exercise');
const prevExercise = document.querySelector('.previous-exercise');

//Social-section
const curSocial = document.querySelector('.current-social');
const prevSocial = document.querySelector('.previous-social');

//Selfcare-section
const curSelfcare = document.querySelector('.current-selfcare');
const prevSelfcare = document.querySelector('.previous-selfcare');

function hours (value) {
    if (value > 1 || value < 1) {
        return ' hrs';
    } else {
        return ' hr';
    }
}


async function doWork() {
    try{
        const response = await fetch("./data.json");
        const array = await response.json();
        const work = array[0];
        const play = array[1];
        const study = array[2];
        const exercise = array[3];
        const social = array[4];
        const selfcare = array[5];

        if (day === true) {
        curWork.textContent = work.timeframes.daily.current + hours(work.timeframes.daily.current);
        prevWork.textContent = 'Last day ' + work.timeframes.daily.previous + hours(work.timeframes.daily.previous);
        curPlay.textContent = play.timeframes.daily.current + hours(play.timeframes.daily.current);
        prevPlay.textContent = 'Last day ' + play.timeframes.daily.previous + hours(play.timeframes.daily.previous );
        curStudy.textContent = study.timeframes.daily.current + hours(study.timeframes.daily.current);
        prevStudy.textContent = 'Last day ' + study.timeframes.daily.previous + hours(study.timeframes.daily.previous);
        curExercise.textContent = exercise.timeframes.daily.current + hours(exercise.timeframes.daily.current);
        prevExercise.textContent = 'Last day ' + exercise.timeframes.daily.previous + hours(exercise.timeframes.daily.previous);
        curSocial.textContent = social.timeframes.daily.current + hours(social.timeframes.daily.current );
        prevSocial.textContent = 'Last day ' + social.timeframes.daily.previous + hours(social.timeframes.daily.previous);
        curSelfcare.textContent = selfcare.timeframes.daily.current + hours(selfcare.timeframes.daily.current);
        prevSelfcare.textContent = 'Last day ' + selfcare.timeframes.daily.previous + hours(selfcare.timeframes.daily.previous);
        }     
        
        if (week === true) {
            curWork.textContent = work.timeframes.weekly.current + hours(work.timeframes.weekly.current);
            prevWork.textContent = 'Last week ' + work.timeframes.weekly.previous + hours(work.timeframes.weekly.previous);
            curPlay.textContent = play.timeframes.weekly.current + hours(play.timeframes.weekly.current);
            prevPlay.textContent = 'Last week ' + play.timeframes.weekly.previous + hours(play.timeframes.weekly.previous );
            curStudy.textContent = study.timeframes.weekly.current + hours(study.timeframes.weekly.current);
            prevStudy.textContent = 'Last week ' + study.timeframes.weekly.previous + hours(study.timeframes.weekly.previous);
            curExercise.textContent = exercise.timeframes.weekly.current + hours(exercise.timeframes.weekly.current);
            prevExercise.textContent = 'Last week ' + exercise.timeframes.weekly.previous + hours(exercise.timeframes.weekly.previous);
            curSocial.textContent = social.timeframes.weekly.current + hours(social.timeframes.weekly.current );
            prevSocial.textContent = 'Last week ' + social.timeframes.weekly.previous + hours(social.timeframes.weekly.previous);
            curSelfcare.textContent = selfcare.timeframes.weekly.current + hours(selfcare.timeframes.weekly.current);
            prevSelfcare.textContent = 'Last week ' + selfcare.timeframes.weekly.previous + hours(selfcare.timeframes.weekly.previous);
        }

        if (month === true) {
            curWork.textContent = work.timeframes.monthly.current + hours(work.timeframes.monthly.current);
            prevWork.textContent = 'Last month ' + work.timeframes.monthly.previous + hours(work.timeframes.monthly.previous);
            curPlay.textContent = play.timeframes.monthly.current + hours(play.timeframes.monthly.current);
            prevPlay.textContent = 'Last month' + play.timeframes.monthly.previous + hours(play.timeframes.monthly.previous );
            curStudy.textContent = study.timeframes.monthly.current + hours(study.timeframes.monthly.current);
            prevStudy.textContent = 'Last month ' + study.timeframes.monthly.previous + hours(study.timeframes.monthly.previous);
            curExercise.textContent = exercise.timeframes.monthly.current + hours(exercise.timeframes.monthly.current);
            prevExercise.textContent = 'Last month ' + exercise.timeframes.monthly.previous + hours(exercise.timeframes.monthly.previous);
            curSocial.textContent = social.timeframes.monthly.current + hours(social.timeframes.monthly.current );
            prevSocial.textContent = 'Last month ' + social.timeframes.monthly.previous + hours(social.timeframes.monthly.previous);
            curSelfcare.textContent = selfcare.timeframes.monthly.current + hours(selfcare.timeframes.monthly.current);
            prevSelfcare.textContent = 'Last month' + selfcare.timeframes.monthly.previous + hours(selfcare.timeframes.monthly.previous);
        }
    }

    catch (err) {
        console.log(err);
    }
   
}

daily.addEventListener('click', () => {
    day = true;
    week = false;
    month = false;
    doWork();
    
});

weekly.addEventListener('click', () => {
    week = true;
    day = false;
    month = false;
    doWork();
});

monthly.addEventListener('click', () => {
    month = true;
    day = false;
    week = false;
    doWork();
})

showmore.addEventListener('click', (event) => {
    alert('Go to the navigation to display data for a different period of time')
})


