const mileStonesData = JSON.parse(data).data;

//load miseStones data

function loadMileStones() {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${mileStonesData
    .map(function (mileStone) {
      return ` <div class="milestone border-b" id ='${mileStone._id}')>
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick = "checkMarkMilestone(this, ${
                mileStone._id
              })"/> </div>
              <div onclick ="openHiddenMileStone(this, ${mileStone._id})">
                <p>
                  ${mileStone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${mileStone.modules
                .map(function (module) {
                  return `<div class="module border-b">
                <p> ${module.name}</p>
              </div>`;
                })
                .join("")}
            </div>
          </div>`;
    })
    .join("")}`;
}

function openHiddenMileStone(mileStoneElement, id) {
  const hiddenPalenShow = mileStoneElement.parentNode.nextElementSibling;
  const shownPalen = document.querySelector(".show");
  const activePalen = document.querySelector(".active");

  //first remove previous active class[except clicked element]
  if (!mileStoneElement.classList.contains(".active") && activePalen) {
    activePalen.classList.remove("active");
  }
  //toggle = যদি থাকে তাহলে remove করে আর যদি না থাকে তাহলে add করা
  mileStoneElement.classList.toggle("active");

  //first remove previous show class[except clicked element]
  if (!hiddenPalenShow.classList.contains("show") && shownPalen) {
    shownPalen.classList.remove("show");
  }
  hiddenPalenShow.classList.toggle("show");

  showMilestone(id);
}

function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = mileStonesData[id].image;
  title.innerText = mileStonesData[id].name;
  details.innerText = mileStonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");

milestoneImage.onload = function () {
  this.style.opacity = "1";
};

function checkMarkMilestone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestones = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestones.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestones.appendChild(item);
    doneList.removeChild(item);
  }

  milestones.reload = function (id) {};
}

loadMileStones();
