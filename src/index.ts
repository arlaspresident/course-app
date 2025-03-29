interface CourseInfo {
    code: string;
    name: string;
    progression: 'A' | 'B' | 'C';
    syllabus: string;
}

let courses: CourseInfo[] = JSON.parse(localStorage.getItem('courses') || '[]');

function addCourse(course: CourseInfo): void {
    if (course.some(c => c.code === course.code)){
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
  