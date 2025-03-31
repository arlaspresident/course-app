interface CourseInfo {
    code: string;
    name: string;
    progression: 'A' | 'B' | 'C';
    syllabus: string;
}

let courses: CourseInfo[] = JSON.parse(localStorage.getItem('courses') || '[]');

function addCourse(course: CourseInfo): void {
    if (courses.some(c => c.code === course.code)){
        alert("kurskod måste vara unik");
        return;
    }
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
    renderCourses();
}

function renderCourses(): void {
    const courseList = document.getElementById('courseList') as HTMLUListElement;
    courseList.innerHTML = '';
  
    courses.forEach(course => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${course.code}</strong> - ${course.name} (${course.progression})
        <a href="${course.syllabus}" target="_blank">Syllabus</a>
      `;
      courseList.appendChild(li);
    });
  }
  const form = document.getElementById('courseForm') as HTMLFormElement;
form.addEventListener('submit', e => {
  e.preventDefault();

  const course: CourseInfo = {
    code: (document.getElementById('code') as HTMLInputElement).value.trim(),
    name: (document.getElementById('name') as HTMLInputElement).value.trim(),
    progression: (document.getElementById('progression') as HTMLSelectElement).value as 'A' | 'B' | 'C',
    syllabus: (document.getElementById('syllabus') as HTMLInputElement).value.trim()
  };

  addCourse(course);
  form.reset();
});


renderCourses();
