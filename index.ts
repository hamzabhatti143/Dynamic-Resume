const handleSubmit = () => {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let number = (document.getElementById("number") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let edu1 = (document.getElementById("edu-1") as HTMLInputElement).value;
    let edu2 = (document.getElementById("edu-2") as HTMLInputElement).value;
    let edu3 = (document.getElementById("edu-3") as HTMLInputElement).value;
    let intro = (document.getElementById("intro") as HTMLInputElement).value;
    let exp1 = (document.getElementById("exp-1") as HTMLInputElement).value;
    let exp2 = (document.getElementById("exp-2") as HTMLInputElement).value;
    let exp3 = (document.getElementById("exp-3") as HTMLInputElement).value;
    let ski1 = (document.getElementById("ski-1") as HTMLInputElement).value;
    let ski2 = (document.getElementById("ski-2") as HTMLInputElement).value;
    let ski3 = (document.getElementById("ski-3") as HTMLInputElement).value;
    let ski4 = (document.getElementById("ski-4") as HTMLInputElement).value;
    let ski5 = (document.getElementById("ski-5") as HTMLInputElement).value;
    let ski6 = (document.getElementById("ski-6") as HTMLInputElement).value;
    let first1 = (document.getElementById("first-1") as HTMLInputElement).value;
    let sec2 = (document.getElementById("sec-2") as HTMLInputElement).value;
    let third3 = (document.getElementById("third-3") as HTMLInputElement).value;
    let forth4 = (document.getElementById("forth-4") as HTMLInputElement).value;
    let fifth5 = (document.getElementById("fifth-5") as HTMLInputElement).value;
    let link1 = (document.getElementById("link-1") as HTMLInputElement).value;
    let link2 = (document.getElementById("link-2") as HTMLInputElement).value;
    let link3 = (document.getElementById("link-3") as HTMLInputElement).value;
    let profilepic = document.getElementById("profilepic") as HTMLInputElement;
    
    if (profilepic.files && profilepic.files[0]) {
        let ProfileImg = URL.createObjectURL(profilepic.files[0]);
        let resumeImage = document.getElementById('resumeImage') as HTMLImageElement;
        resumeImage.src = ProfileImg;
    }

    (document.getElementById('resumeName') as HTMLElement).innerHTML = name;
    (document.getElementById('resumeName1') as HTMLElement).innerHTML = name;
    (document.getElementById('resumeNumber') as HTMLElement).innerHTML = number;
    (document.getElementById('resumeEmail') as HTMLElement).innerHTML = email;
    (document.getElementById('resumeIntro') as HTMLElement).innerHTML = intro;
    (document.getElementById('resumeEdu') as HTMLElement).innerHTML = edu1;
    (document.getElementById('resumeEdu2') as HTMLElement).innerHTML = edu2;
    (document.getElementById('resumeEdu3') as HTMLElement).innerHTML = edu3;
    (document.getElementById('resumeExp1') as HTMLElement).innerHTML = exp1;
    (document.getElementById('resumeExp2') as HTMLElement).innerHTML = exp2;
    (document.getElementById('resumeExp3') as HTMLElement).innerHTML = exp3;
    (document.getElementById('resumeSkill1') as HTMLElement).innerHTML = ski1;
    (document.getElementById('resumeSkill2') as HTMLElement).innerHTML = ski2;
    (document.getElementById('resumeSkill3') as HTMLElement).innerHTML = ski3;
    (document.getElementById('resumeSkill4') as HTMLElement).innerHTML = ski4;
    (document.getElementById('resumeSkill5') as HTMLElement).innerHTML = ski5;
    (document.getElementById('resumeSkill6') as HTMLElement).innerHTML = ski6;
    (document.getElementById('firstCer') as HTMLElement).innerHTML = first1;
    (document.getElementById('secondCer') as HTMLElement).innerHTML = sec2;
    (document.getElementById('thirdCer') as HTMLElement).innerHTML = third3;
    (document.getElementById('forthCer') as HTMLElement).innerHTML = forth4;
    (document.getElementById('fifthCer') as HTMLElement).innerHTML = fifth5;
    (document.getElementById('resumeLink1') as HTMLElement).innerHTML = link1;
    (document.getElementById('resumeLink2') as HTMLElement).innerHTML = link2;
    (document.getElementById('resumeLink3') as HTMLElement).innerHTML = link3;

    console.log("Data submitted:", name);
};
