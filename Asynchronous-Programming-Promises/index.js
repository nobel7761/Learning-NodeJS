console.log('Line 1');

getStudent(3)
    .then(student => {
        console.log(student);
        return getStudentCourses(student);
    })
    .then(courses => {
        console.log(courses);
        return getStudentMarks(courses);
    })
    .then(marks => console.log(marks));

console.log('Line 2');

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student from Database...');
            resolve({ id: id, name: 'Nobel' });
        }, 3000);
    })

}

function getStudentCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student Courses from Database...');
            resolve({ courses: ['JavaScript', 'Python'] })
        }, 3000)
    })

}

function getStudentMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student Marks from Database...');
            resolve({ marks: { [courses.courses[0]]: 80, [courses.courses[1]]: 90 } }); //object er property jodi variable aakare likhte hoy tokhn sheta [] bracket er vitore likhte hoy.
        }, 3000)
    })

}