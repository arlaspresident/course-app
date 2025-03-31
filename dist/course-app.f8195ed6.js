let e=JSON.parse(localStorage.getItem("courses")||"[]");function t(){let t=document.getElementById("courseList");t.innerHTML="",e.forEach(e=>{let n=document.createElement("li");n.innerHTML=`
        <strong>${e.code}</strong> - ${e.name} (${e.progression})
        <a href="${e.syllabus}" target="_blank">Syllabus</a>
      `,t.appendChild(n)})}const n=document.getElementById("courseForm");n.addEventListener("submit",o=>{o.preventDefault(),function(n){if(n.some(e=>e.code===n.code)){alert("kurskod måste vara unik");return}e.push(n),localStorage.setItem("courses",JSON.stringify(e)),t()}({code:document.getElementById("code").value.trim(),name:document.getElementById("name").value.trim(),progression:document.getElementById("progression").value,syllabus:document.getElementById("syllabus").value.trim()}),n.reset()}),t();
//# sourceMappingURL=course-app.f8195ed6.js.map
