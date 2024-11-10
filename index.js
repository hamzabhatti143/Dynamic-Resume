const handleSubmit = () => {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let edu1 = document.getElementById("edu-1").value;
    let edu2 = document.getElementById("edu-2").value;
    let edu3 = document.getElementById("edu-3").value;
    let intro = document.getElementById("intro").value;
    let exp1 = document.getElementById("exp-1").value;
    let exp2 = document.getElementById("exp-2").value;
    let exp3 = document.getElementById("exp-3").value;
    let ski1 = document.getElementById("ski-1").value;
    let ski2 = document.getElementById("ski-2").value;
    let ski3 = document.getElementById("ski-3").value;
    let ski4 = document.getElementById("ski-4").value;
    let ski5 = document.getElementById("ski-5").value;
    let ski6 = document.getElementById("ski-6").value;
    let first1 = document.getElementById("first-1").value;
    let sec2 = document.getElementById("sec-2").value;
    let third3 = document.getElementById("third-3").value;
    let forth4 = document.getElementById("forth-4").value;
    let fifth5 = document.getElementById("fifth-5").value;
    let link1 = document.getElementById("link-1").value;
    let link2 = document.getElementById("link-2").value;
    let link3 = document.getElementById("link-3").value;
    let profilepic = document.getElementById("profilepic");
    
    if (profilepic.files[0]) {
        let ProfileImg = URL.createObjectURL(profilepic.files[0]);
        let resumeImage = document.getElementById('resumeImage');
        resumeImage.src = ProfileImg;
    }

    document.getElementById('resumeName').innerHTML = name;
    document.getElementById('resumeName1').innerHTML = name;
    document.getElementById('resumeNumber').innerHTML = number;
    document.getElementById('resumeEmail').innerHTML = email;
    document.getElementById('resumeIntro').innerHTML = intro;
    document.getElementById('resumeEdu').innerHTML = edu1;
    document.getElementById('resumeEdu2').innerHTML = edu2;
    document.getElementById('resumeEdu3').innerHTML = edu3;
    document.getElementById('resumeExp1').innerHTML = exp1;
    document.getElementById('resumeExp2').innerHTML = exp2;
    document.getElementById('resumeExp3').innerHTML = exp3;
    document.getElementById('resumeSkill1').innerHTML = ski1;
    document.getElementById('resumeSkill2').innerHTML = ski2;
    document.getElementById('resumeSkill3').innerHTML = ski3;
    document.getElementById('resumeSkill4').innerHTML = ski4;
    document.getElementById('resumeSkill5').innerHTML = ski5;
    document.getElementById('resumeSkill6').innerHTML = ski6;
    document.getElementById('firstCer').innerHTML = first1;
    document.getElementById('secondCer').innerHTML = sec2;
    document.getElementById('thirdCer').innerHTML = third3;
    document.getElementById('forthCer').innerHTML = forth4;
    document.getElementById('fifthCer').innerHTML = fifth5;
    document.getElementById('resumeLink1').innerHTML = link1;
    document.getElementById('resumeLink2').innerHTML = link2;
    document.getElementById('resumeLink3').innerHTML = link3;

    console.log("Data submitted:", name);
};

