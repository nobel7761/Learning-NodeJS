console.log('Line 1');

getStudent(2, (student) => {
    console.log(student);
    getStudentCourses(student, (courses) => {
        console.log(courses);
        getStudentMarks(courses, (marks) => {
            console.log(marks);
        })
    })
})

console.log('Line 2');

function getStudent(id, cb) {
    setTimeout(() => {
        console.log('Fetching Student from Database...');
        cb({ id: id, name: 'Nobel' });
    }, 3000);
}

function getStudentCourses(student, cb) {
    setTimeout(() => {
        console.log('Fetching Student Courses from Database...');
        cb({ id: student.id, name: student.name, courses: ['JavaScript', 'Python'] })
    }, 3000)
}

function getStudentMarks(courses, cb) {
    setTimeout(() => {
        console.log('Fetching Student Marks from Database...');
        cb({ id: courses.id, name: courses.name, courses: courses.courses, marks: { [courses.courses[0]]: 80, [courses.courses[1]]: 90 } }); //object er property jodi variable aakare likhte hoy tokhn sheta [] bracket er vitore likhte hoy.
    }, 3000)
}