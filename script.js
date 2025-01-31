const ul = document.querySelector(".ul-list");

const allUrl = ["github","linkedin","naukri","instagram","facebook","leetcode","hackerrank","codechef","codeforces"]
 




ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    const index = Number(e.target.dataset.value);
    const attribute = ul.children[index].children[1].getAttribute("id");
    let inputText = ul.children[index].children[1].value;

    if (inputText === "" || !URL.canParse(inputText)) {
      ul.children[index].children[1].value = "";
      alert("Please Enter Valid Url");
      return;
    }
    ul.children[index].children[1].setAttribute("readonly", true);

    localStorage.setItem(attribute, inputText);
    const Arr = Array.from(ul.children);
   

    
    // localStorage.clear()
  } else if (e.target.classList.contains("copy")) {
    const index = Number(e.target.dataset.value);
    let inputText = ul.children[index].children[1].value;

    if (inputText === "") {
      return alert("Not Copy Empty Data");
    }

    navigator.clipboard.writeText(inputText);
  } else if (e.target.classList.contains("delete")) {
    const index = Number(e.target.dataset.value);
    const attribute = ul.children[index].children[1].getAttribute("id");
    let inputText = ul.children[index].children[1].value;

    if (inputText === "") {
      return alert("Please Enter Url First");
    }
    localStorage.setItem(attribute, "");

    ul.children[index].children[1].value = "";
  }
});


(function(){
    allUrl.map((data,index)=>{
        const urldata = localStorage.getItem(data);
        ul.children[index].children[1].value = urldata;
    })
})();