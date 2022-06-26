let users = [
    {
  
      id: "123456789",
  
      createdDate: "2021-01-06T00:00:00.000Z",
  
      status: "En validation",
  
      firstName: "Mohamed",
  
      lastName: "Taha",
  
      userName: "mtaha",
  
      registrationNumber: "2584",
  
    },
  
     {
  
      id: "987654321",
  
      createdDate: "2021-07-25T00:00:00.000Z",
  
      status: "Validé",
  
      firstName: "Hamid",
  
      lastName: "Orrich",
  
      userName: "horrich",
  
      registrationNumber: "1594",
  
    },
  
       {
  
      id: "852963741",
  
      createdDate: "2021-09-15T00:00:00.000Z",
  
      status: "Rejeté",
  
      firstName: "Rachid",
  
      lastName: "Mahidi",
  
      userName: "rmahidi",
  
      registrationNumber: "3576",
  
    }
  
  ];


if(localStorage.getItem("users")===null){
  myJSON = JSON.stringify(users);
  localStorage.setItem("users", myJSON);
}

//select item
const body_Table=document.querySelector('#tableBody');
const get_Form_Enregistre=document.querySelector(".get_form_Enregistre");
const modal_form=document.querySelector("#modal_form");
const overlay=document.querySelector("#overlay");
const submit_form_Enregistre=document.querySelector(".submit_form_Enregistre");


//Event listeners
window.addEventListener('load', Remplir_table);
get_Form_Enregistre.addEventListener('click', Affiche_form);
overlay.addEventListener('click',Close_form);
submit_form_Enregistre.addEventListener('click',enregitre_user);



//Functions

function Remplir_table(){
  document.getElementById("tableBody").innerHTML = '';
  text = localStorage.getItem("users");
  let locale_Storage_users= JSON.parse(text);
  console.log(locale_Storage_users);
  let num=0
  for (let user in locale_Storage_users){
    console.log("__________________________________________")
    const line_tabe = document.createElement("tr");
    let som=""; 

    // Append to another element:

    for (let arg in locale_Storage_users[user] ){
      switch(locale_Storage_users[user][arg]){
        case 'Validé':
          som =som + "<td><div class='inner_table valide'>"+locale_Storage_users[user][arg]+"</div></td>";
          break;
        case 'Rejeté':
          som =som + "<td><div class='inner_table rejected'>"+locale_Storage_users[user][arg]+"</div></td>";
          break;
        case 'En validation':
          som =som + "<td><div class='inner_table on-validation'>"+locale_Storage_users[user][arg]+"</div></td>";
          break;
        default:
            som =som + "<td><div class='inner_table'>"+locale_Storage_users[user][arg]+"</div></td>";
      }
      

      
      //console.log(users[user][arg]);
    }
    som=som+"<td onclick='delete_from_array("+num+")' style='padding-left: 150px;'><img width='10%' src='delete.png' ></td>";
    line_tabe.innerHTML =som;
    num=num+1;
    document.getElementById("tableBody").appendChild(line_tabe);
    console.log("__________________________________________") 
  }
}
function Affiche_form(){
  document.getElementById("myForm").reset();
  if (modal_form== null)return
  modal_form.classList.add('active');
  overlay.classList.add('active');
}
function Close_form(){
  document.getElementById("myForm").reset();
  if (modal_form== null)return
  modal_form.classList.remove('active');
  overlay.classList.remove('active');
}

function mise_a_jour(local){
  myObj =JSON.parse(localStorage.getItem("users"));
  myObj.push(local);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("users", myJSON);
}

function enregitre_user(){
  console.clear();
  console.log(document.querySelector("#ID").value!==""  && document.querySelector("#nom").value!=="" && document.querySelector("#prenom").value!=="" && document.querySelector("#nom_user").value!=="" && document.querySelector("#Matricule").value!=="");
    if(document.querySelector("#ID").value!==""  && document.querySelector("#nom").value!=="" && document.querySelector("#prenom").value!=="" && document.querySelector("#nom_user").value!=="" && document.querySelector("#Matricule").value!==""){
    let local={
      id: document.querySelector("#ID").value,
  
      createdDate: document.querySelector("#date_creation").value,
  
      status: document.querySelector("#etat").value,
  
      firstName: document.querySelector("#nom").value,
  
      lastName: document.querySelector("#prenom").value,
  
      userName: document.querySelector("#nom_user").value,
  
      registrationNumber: document.querySelector("#Matricule").value,  
    };
    
    mise_a_jour(local);
    Remplir_table();
  }
}

function delete_from_array(num){
  myObj =JSON.parse(localStorage.getItem("users"));
  myObj.splice(num,1);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("users", myJSON);
  Remplir_table();
}