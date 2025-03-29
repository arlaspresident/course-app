interface CourseInfo {
    code: string;
    name: string;
    progressiom: 'A' | 'B' | 'C';
    syllabus: string;
}

let courses: CourseInfo[] = JSON.parse(localStorage.getItem('courses') || '[]');

function addCourse(course: CourseInfo): void {
    if (course.som(c => c.code === course.code)){
        alert("kurskod måste vara unik");
        return;
    }
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
    renderCourses();
}