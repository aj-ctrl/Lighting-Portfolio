const aboutBtn = $("#aboutButton");
const about = $("#about");
const resumeBtn = $("#resumeButton");
const resume = $("#resume");
const aboutModal = $("#aboutModal");
const resumeModal = $("#resumeModal")

// NAVBAR BUTTON TOGGLES

$(function() {
    aboutBtn.click(function() {
        resume.hide();
        resumeBtn.removeClass("active");
        about.toggle('fade');
        if (document.getElementById("aboutButton").classList.contains('active')) {
            aboutBtn.removeClass("active");
        } else {
            aboutBtn.addClass("active");
        }
    })
})

$(function() {
    resumeBtn.click(function() {
        about.hide();
        aboutBtn.removeClass("active");
        resume.toggle('fade');
        if (document.getElementById("resumeButton").classList.contains('active')) {
            resumeBtn.removeClass("active");
        } else {
            resumeBtn.addClass("active");
        }
    })
})

// Modal specific toggles

$(function() {
    aboutBtn.click(function() {
        aboutModal.show("fade");
    })
})

$(function() {
    $("#modalAboutClose").click(function() {
        aboutModal.hide("fade");
        aboutBtn.removeClass("active");
    })
})


$(function() {
    resumeBtn.click(function() {
        resumeModal.show("fade");
    })
})

$(function() {
    $("#modalResumeClose").click(function() {
        resumeModal.hide("fade");
        resumeBtn.removeClass("active");
    })
})