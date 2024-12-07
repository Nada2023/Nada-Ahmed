
let productDom = document.querySelector(".project");
let menu = document.querySelector(".user");
let projects = prjectsDB;


let drowproductItme = (projects,filter) => {
    let myprojects = [];
  if(filter === 'all') {
    myprojects = projects;
  }
  else
  {
    myprojects = projects.filter((i) => i.filter === filter);
  }
  
    let productItme = myprojects.map((itme) => {
      return `
      <div class="col-lg-3 col-md-4">
          <div class="box wow fadeInLeft animat-${itme.id>9?'1':''}${itme.id} ">
            <div class="head">
              <span>${itme.name}</span>
              <a href="../pages/project_id.html" onclick="saveProject_id(${itme.id})" class="dots">
              <i class="fa fa-circle "></i><i class="fa fa-circle "></i><i class="fa fa-circle "></i>
              </a>
            </div>
            <div class="img">
              <img src="../img/${itme.img}" alt="">
              <div class="more">
                <a onclick="saveProject_id(${itme.id})" href="../pages/project_id.html" class="abtn">more</a>
              </div>
            </div>            
          </div>
        </div>
        
  `;
    });
    productDom.innerHTML = productItme.join("");
  } 
drowproductItme(projects,'all')


let saveProject_id = (id) => {
  console.log(localStorage.setItem('Progect_id',id)?'done':'000000');
}
$(document).ready(function() {
  let spanlist = $("span.mt-5")
  let all = $(".all");
  let react = $(".react");
  let angular = $(".angular");
  let Next = $(".Next");
  let js = $(".js");
  let others = $(".others");
  all.click(() => {
    removeclass(spanlist)
    all.addClass('active')
    drowproductItme(projects,'all');
  })
  react.click(() => {
    removeclass(spanlist)
    react.addClass('active')
    drowproductItme(projects,'react');
  })
  angular.click(() => {
    removeclass(spanlist)
    angular.addClass('active')
    drowproductItme(projects,'angular');
  })
  Next.click(() => {
    removeclass(spanlist)
    Next.addClass('active')
    drowproductItme(projects,'Next');
  })
  js.click(() => {
    removeclass(spanlist)
    js.addClass('active')
    drowproductItme(projects,'js');
  })
  others.click(() => {
    removeclass(spanlist)
    others.addClass('active')
    drowproductItme(projects,'others');
  })
  function removeclass(spanlist) {
    for(i = 0; i < spanlist.length;i++)
    {
    spanlist[i].classList.remove('active');
    }
  }
})


