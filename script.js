//functions change the highlighting of headings when they are clicked 
// from the navbar at the top

function aboutUsClicked() {
 console.log("about us clicked")
  
  document.getElementById("aboutUsTitle").style = "background-color: darkgray"
  
  document.getElementById("contributeTitle").style = "background-color: none"
  document.getElementById("contactTitle").style = "background-color: none"
  document.getElementById("axesTitle").style = "background-color: none"
}

function nineAxesClicked() {
  console.log("nine axes clicked")
  
  document.getElementById("axesTitle").style = "background-color: darkgray"
  
  document.getElementById("aboutUsTitle").style = "background-color: none"
  document.getElementById("contributeTitle").style = "background-color: none"
  document.getElementById("contactTitle").style = "background-color: none"
}

function contributeClicked() {
  console.log("contribute clicked")
  
  document.getElementById("contributeTitle").style = "background-color: darkgray"
  
  document.getElementById("aboutUsTitle").style = "background-color: none"
  document.getElementById("axesTitle").style = "background-color: none"
  document.getElementById("contactTitle").style = "background-color: none"
}

function contactClicked() {
  console.log("contact us clicked")
  
  document.getElementById("contactTitle").style = "background-color: darkgray"
  
  document.getElementById("aboutUsTitle").style = "background-color: none"
  document.getElementById("axesTitle").style = "background-color: none"
  document.getElementById("contributeTitle").style = "background-color: none"
}