function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "";
}

const navBar = document.querySelector(".navbar")
allLi = document.querySelectorAll("li");


const userList = document.querySelector('#user-list');

// create element & render ideas
function renderUser(doc){
  let li = document.createElement('li');
  let name = document.createElement('h4');
  let contactEmail = document.createElement('span');
  let profileImage = document.createElement('img');
  let userInterests = document.createElement('h5');


  name.classList.add("name");
  contactEmail.classList.add("contact-email");
  profileImage.classList.add("profile-image");
  userInterests.classList.add("user-interests");

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  contactEmail.textContent = doc.data().email;
  profileImage.src = doc.data().profileImageURL;
  userInterests.textContent = "Likes " + doc.data().interests + " Music";

  li.appendChild(profileImage);
  li.appendChild(name);
  li.appendChild(contactEmail);
  li.appendChild(userInterests);

  userList.appendChild(li);
}

// getting data and updating data in realtime
db.collection('users').orderBy("name").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
      if(change.type == 'added'){
          renderUser(change.doc);
      } else if (change.type == 'removed'){
      }
  });
});
