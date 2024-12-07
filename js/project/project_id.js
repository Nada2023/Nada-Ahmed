let project_id = localStorage.getItem('Progect_id');
let projectDom = document.querySelector(".product_id");
let projects = prjectsDB;

let Project = projects.find((i) => i.id == project_id);

console.log(project_id);



let drowproductItme = (Project) => {
    let projectItme = `
          <h3 class=" wow  fadeInLeft">${Project.name}</h3>
          <p class="desc p-3  wow fadeInLeft bounceInLeft animat-2"> ${Project.desc} </p>
          <div class="detais  mt-2 ">
            <h4  class="  wow fadeInLeft animat-3" >Tools</h4>
            <ul class="tools   animat-4" >
              
            </ul>
          </div>
          <div class="links mt-3">
            <div class="code">
              <h6  class="  wow fadeInLeft animat-6" >Code Link :</h6>
              <a  class="  wow fadeInLeft animat-7"  href="${Project.gith}">Githib Link</a>
            </div>
            <div class="code mt-3">
              <h6  class="  wow fadeInLeft animat-8" >Live Demo :</h6>
              ${Project.video ? `<button  class="  wow fadeInLeft animat-9" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Live</button>`
              :  `<a  class="  wow fadeInLeft animat-9" href="${Project.live}">Live</a>`}
              
            </div>
          </div>
        </div>    
  `;  
  let video = `
    <div class="modal fade wow " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
              tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header   ">
                    <h5 class="modal-title " id="exampleModalToggleLabel">${Project.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body p-0  m-0"> 
                    <video controls muted autoplay  width="100%" height= "100%"  >
                      <source src="../img/vidoes/${Project.video}.mp4" type="video/mp4">
                    </video>
                  </div>
                </div>
              </div>
            </div>
  `
    projectDom.innerHTML += projectItme;
    projectDom.innerHTML += video;
  } 

drowproductItme(Project)

let ultools=document.querySelector(".tools");

let drowtoolslist=(Projecttools)=>{
  ulitms='';
  Projecttools.forEach(element => {
    ulitms+= `
      <li class="wow fadeInLeft animat-5">${element}</li>
    `;
  });
  ultools.innerHTML += ulitms;

}
drowtoolslist(Project.tools)


let drowimglist=(Projecttools)=>{
  for (let index = 0; index < Projecttools.length; index++) {
    let imgnum=document.querySelector(`.item${index+1}-slick1`);
    let img=`
    <img src="../img/${Projecttools[index]}" class="d-block w-100" alt="...">
    `
    imgnum.innerHTML += img;
    
  }
}
drowimglist(Project.imgs)


let drowvideo=(Projecttools)=>{
  for (let index = 0; index < Projecttools.length; index++) {
    let imgnum=document.querySelector(`.item${index+1}-slick1`);
    let img=`
    <img src="../img/${Projecttools[index]}" class="d-block w-100" alt="...">
    `
    imgnum.innerHTML += img;
    
  }
}